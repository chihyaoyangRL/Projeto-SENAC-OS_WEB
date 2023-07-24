<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Cliente extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Cliente_model');
        $this->load->model('Login_model');
        $this->Login_model->verificaLogin();
        $this->Login_model->checkSession();
    }

    public function index()
    {
        $data['clien'] = $this->Cliente_model->getAll();
        $this->load->view('includes/header');
        $this->load->view('cliente/lista', $data);
        $this->load->view('includes/footer');
    }
    public function deletar($id)
    {
        if ($id > 0) {
            if ($this->Cliente_model->delete($id)) {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Deletado com Sucesso! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Deletar *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            }
        }
        redirect('Cliente/index');
    }
    //Update
    public function alteracao($id)
    {
        $data['client'] = $this->Cliente_model->getId($id);
        $this->load->view('includes/header');
        $this->load->view('cliente/alterar', $data);
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
                if ($this->Cliente_model->update($id, $data) != null) {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Alterado com Sucesso ! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Cliente/index');
                } else {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-warning"><i class="fas fa-exclamation-triangle"></i> não sofreu Alterações<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Cliente/index');
                }
            }
        }
    }
}
