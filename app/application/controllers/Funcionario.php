<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Funcionario extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Funcionario_model');
        $this->load->model('Login_model');
        $this->Login_model->verificaLogin();
        $this->Login_model->checkSession();
    }

    public function index()
    {
        $data['func'] = $this->Funcionario_model->getAll();
        $this->load->view('includes/header');
        $this->load->view('funcionario/lista', $data);
        $this->load->view('includes/footer');
    }
    //Insert
    public function cadastro()
    {
        $this->load->view('includes/header');
        $this->load->view('funcionario/cadastro');
        $this->load->view('includes/footer');
    }
    public function cadastrar()
    {
        $this->form_validation->set_rules('nome', 'nome', 'required|max_length[80]');
        $this->form_validation->set_rules('email', 'email', 'required|is_unique[funcionario.email]|max_length[80]');
        $this->form_validation->set_rules('telefone', 'telefone', 'required|is_unique[funcionario.telefone]|max_length[80]');
        $this->form_validation->set_rules('cpf', 'cpf', 'required|max_length[80]');
        if ($this->form_validation->run() == false) {
            $this->cadastro();
        } else {
            //Gera string Aleatorio e altera senha no DB
            $this->load->helper('string');
            $randpass = random_string('alnum', 8);
            $data = array(
                'nome' => $this->input->post('nome'),
                'email' => $this->input->post('email'),
                'password' => $randpass,
                'telefone' => $this->input->post('telefone'),
                'cpf' => $this->input->post('cpf'),
            );
            if ($this->Funcionario_model->insert($data) != null) {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Cadastrado com Sucesso! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Cadastrar *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            }
            //Configuração de email
            $this->load->library("email");
            $config = array(
                'mailtype' => "html",
            );
            $this->email->initialize($config);
            $this->email->from('chih.yang@aluno.sc.senac.br', 'Admin');
            $this->email->to($this->input->post('email'));
            $this->email->subject('Baixa nosso aplicativo ou acessar o nosso Site !');
            $this->email->message('Aqui está seu senha para entrar ! ' . $randpass
                . "<br>" .
                'Site: https://ordemservices.000webhostapp.com/'
                . "<br>" .
                'APP: https://play.google.com/store/apps/details?id=com.chihyaoyang.api_contatos');
            //Send mail
            if ($this->email->send()) {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Cadastrado com Sucesso! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                redirect('Funcionario/index');
            } else {
                show_error($this->email->print_debugger());
                $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Cadastrar *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                redirect('Funcionario/cadastro');
            }
        }
    }
    public function deletar($id)
    {
        if ($id > 0) {
            if ($this->Funcionario_model->delete($id)) {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Deletado com Sucesso! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Deletar *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            }
        }
        redirect('Funcionario/index');
    }
    //Update
    public function alteracao($id)
    {
        $data['func'] = $this->Funcionario_model->getId($id);
        $this->load->view('includes/header');
        $this->load->view('funcionario/alterar', $data);
        $this->load->view('includes/footer');
    }
    public function alterar($id)
    {
        if ($id > 0) {
            $this->form_validation->set_rules('nome', 'nome', 'required|max_length[80]');
            $this->form_validation->set_rules('email', 'email', 'required|max_length[80]');
            $this->form_validation->set_rules('password', 'password', 'required|max_length[20]');
            $this->form_validation->set_rules('telefone', 'telefone', 'required|max_length[80]');
            $this->form_validation->set_rules('cpf', 'cpf', 'required|max_length[80]');
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
                if ($this->Funcionario_model->update($id, $data) != null) {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Alterado com Sucesso ! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Funcionario/index');
                } else {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-warning"><i class="fas fa-exclamation-triangle"></i> não sofreu Alterações<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Funcionario/index');
                }
            }
        }
    }
}
