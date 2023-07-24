<?php

/**
 * Classe model da tabela usuario do DB
 * @author Yang
 */
class Login_model extends CI_Model
{
    const BASE_URL = 'http://senacsmo.educacao.ws/chih/rest/';
    public function postCURL($params)
    {
        $curl = curl_init();
        $sendpostdata = json_encode($params);
        // Set some options - we are passing in a useragent too here
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_URL => self::BASE_URL . 'Login/login',
            CURLOPT_HTTPHEADER => array('Accept: application/json', 'Content-Type: application/json'),
            CURLOPT_POSTFIELDS => $sendpostdata
        ));
        $resp = curl_exec($curl);
        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($statusCode == 200) {
            return $resp;
        } else {
            return null;
        }
    }
    public function loginphone($params)
    {
        $curl = curl_init();
        $sendpostdata = json_encode($params);
        // Set some options - we are passing in a useragent too here
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_URL => self::BASE_URL . 'Login/loginphone',
            CURLOPT_HTTPHEADER => array('Accept: application/json', 'Content-Type: application/json'),
            CURLOPT_POSTFIELDS => $sendpostdata
        ));
        $resp = curl_exec($curl);
        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($statusCode == 200) {
            return $resp;
        } else {
            return null;
        }
    }

    //Método que valida na sessão se o usuário esta logado
    public function verificaLogin()
    {
        //resgata na sessão o status logado e o id do usuario
        $logado = $this->session->userdata('logado');
        $idUsuaio = $this->session->userdata('idUsuario');
        //verifica se o status está setado, ou não está true, ou não tem isUsuario
        if ((!isset($logado)) || ($logado != TRUE) || ($idUsuaio <= 0)) {
            //redireciona obrigando o login...
            redirect(base_url() . 'Login/login');
        }
    }
    //Verifica session
    public function checkSession()
    {
        $status = $this->session->userdata('status');
        if ($status == 2) {
            redirect(base_url() . 'Login/login');
        }
    }
}
