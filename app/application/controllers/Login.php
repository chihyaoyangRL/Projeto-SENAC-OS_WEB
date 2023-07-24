<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{

    public function index()
    {
        $this->load->view('login/login');
    }

    //Construct
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Login_model');
        $this->load->model('Cliente_model');
    }

    public function login()
    {
        $this->form_validation->set_rules('email', 'email', 'required');
        $this->form_validation->set_rules('password', 'password', 'required');
        if ($this->form_validation->run() == false) {
            $this->index();
        } else {
            $params = array(
                'email' => $this->input->post('email'),
                'password' => $this->input->post('password')
            );
            $usuario = $this->Login_model->postCURL($params);
            $user = (array) json_decode($usuario);
            if ($user != null) {
                if ($user['status'] == 1) {
                    $data = array(
                        'idUsuario' => $user['id'],
                        'nome' => $user['nome'],
                        'email' => $user['email'],
                        'status' => $user['status'],
                        'token' => $user['token'],
                        'logado' => true
                    );
                } else {
                    $data = array(
                        'idUsuario' => $user['id'],
                        'nome' => $user['nome'],
                        'email' => $user['email'],
                        'status' => $user['status'],
                        'logado' => true
                    );
                }
                $this->session->set_userdata($data);
                if ($user['status'] == 1) {
                    redirect(base_url() . 'Pedido');
                } else if ($user['status'] == 2) {
                    redirect(base_url() . 'PaginaCliente/index/' . $user['id']);
                }
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-warning"><i class="fas fa-exclamation-triangle"></i> Usuário e Senha Incorretos *_*</div>');
                redirect(base_url() . 'Login/login');
            }
        }
    }
    public function loginPhone()
    {
        $this->form_validation->set_rules('telefone', 'telefone', 'required');
        if ($this->form_validation->run() == false) {
            $this->load->view('login/loginphone');
        } else {
            $params = array(
                'telefone' => $this->input->post('telefone')
            );
            $usuario = $this->Login_model->loginphone($params);
            $user = (array) json_decode($usuario);
            if ($user != null) {
                if ($user['status'] == 1) {
                    $data = array(
                        'idUsuario' => $user['id'],
                        'nome' => $user['nome'],
                        'email' => $user['email'],
                        'status' => $user['status'],
                        'token' => $user['token'],
                        'logado' => true
                    );
                } else {
                    $data = array(
                        'idUsuario' => $user['id'],
                        'nome' => $user['nome'],
                        'email' => $user['email'],
                        'status' => $user['status'],
                        'logado' => true
                    );
                }
                $this->session->set_userdata($data);
                if ($user['status'] == 1) {
                    redirect(base_url() . 'Pedido');
                } else if ($user['status'] == 2) {
                    redirect(base_url() . 'PaginaCliente/index/' . $user['id']);
                }
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-warning"><i class="fas fa-exclamation-triangle"></i> Número não encontrados *_*</div>');
                //redireciona obrigando o login...
                redirect(base_url() . 'Login/loginphone');
            }
        }
    }
    public function perfil($id)
    {
        $data['user'] = $this->Cliente_model->getOneclient($id);
        $this->load->view('includes/header');
        $this->load->view('user/lista', $data);
        $this->load->view('includes/footer');
    }

    //Update
    public function alteracao($id)
    {
        $data['user'] = $this->Cliente_model->getId($id);
        $this->load->view('includes/header');
        $this->load->view('user/alterar', $data);
        $this->load->view('includes/footer');
    }
    public function alterar($id)
    {
        if ($id > 0) {
            $this->form_validation->set_rules('nome', 'nome', 'required|max_length[50]');
            $this->form_validation->set_rules('password', 'password', 'required|min_length[6]|max_length[20]');
            if ($this->form_validation->run() == false) {
                $this->alteracao($id);
            } else {
                $data = array(
                    'nome' => $this->input->post('nome'),
                    'email' => $this->input->post('email'),
                    'password' => $this->input->post('password'),
                    'telefone' => $this->input->post('telefone'),
                    'cpf' => $this->input->post('cpf'),
                );
                if ($this->Cliente_model->update($id, $data)) {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Usuário Alterado com Sucesso Tentei loga de novo! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Login/login');
                    $this->session->sess_destroy();
                } else {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Alterar Senha *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Login/alterar/' . $id);
                }
            }
        } else {
            redirect('Login/index');
        }
    }


    public function sair()
    {
        $this->session->sess_destroy();
        redirect(base_url());
    }
}
