<?php

/*
 * @author Yang  
 */

class Cliente_model extends CI_model
{
    const BASE_URL = 'http://senacsmo.educacao.ws/chih/rest/';
    public function getAll()
    {
        // Get cURL resource
        $curl = curl_init();
        // Set some options - we are passing in a useragent too here
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_URL => self::BASE_URL . 'Cliente',
            CURLOPT_HTTPHEADER => array('Accept: application/json', 'Content-Type: application/json'),
        ));
        $resp = curl_exec($curl);
        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($statusCode == 200) {
            return $resp;
        } else {
            return null;
        }
    }
    public function getOneclient($id)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_URL => self::BASE_URL . 'Cliente/' . $id,
            CURLOPT_HTTPHEADER => array('Accept: application/json', 'Content-Type: application/json'),
        ));
        $resp = curl_exec($curl);
        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($statusCode == 200) {
            return $resp;
        } else {
            return null;
        }
    }
    public function delete($id)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_URL => self::BASE_URL . 'Cliente/' . $id,
            CURLOPT_HTTPHEADER => array('Accept: application/json', 'Content-Type: application/json'),
        ));
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE");
        $resp = curl_exec($curl);
        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($statusCode == 200) {
            return true;
        } else {
            return false;
        }
        echo $resp;
    }
    public function getId($id)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_URL => self::BASE_URL . 'Cliente/' . $id,
            CURLOPT_HTTPHEADER => array('Accept: application/json', 'Content-Type: application/json'),
        ));
        $resp = curl_exec($curl);
        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($statusCode == 200) {
            return $resp;
        } else {
            return null;
        }
    }
    public function update($id, $data)
    {
        $curl = curl_init();
        $sendputdata = json_encode($data);
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_URL => self::BASE_URL . 'Cliente/' . $id,
            CURLOPT_HTTPHEADER => array('Accept: application/json', 'Content-Type: application/json'),
            CURLOPT_POSTFIELDS => $sendputdata
        ));
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
        $resp = curl_exec($curl);
        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($statusCode == 200) {
            return $resp;
        } else {
            return null;
        }
    }
}
