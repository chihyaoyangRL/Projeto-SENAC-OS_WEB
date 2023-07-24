<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Tipo extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Tipo_model');
        $this->load->model('Login_model');
        $this->Login_model->verificaLogin();
        $this->Login_model->checkSession();
    }
    public function index()
    {
        $data['Tipo'] = $this->Tipo_model->getAll();
        $this->load->view('includes/header');
        $this->load->view('tipo/lista', $data);
        $this->load->view('includes/footer');
    }
    //Insert
    public function cadastro()
    {
        $this->load->view('includes/header');
        $this->load->view('tipo/cadastro');
        $this->load->view('includes/footer');
    }
    public function cadastrar()
    {
        $this->form_validation->set_rules('tipo', 'tipo', 'required|is_unique[tipo.type]|max_length[80]');
        if ($this->form_validation->run() == false) {
            $this->cadastro();
        } else {
            $data = array(
                'type' => $this->input->post('tipo')
            );
            if ($this->Tipo_model->insert($data) != null) {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Cadastrado com Sucesso! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                redirect('tipo/index');
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Cadastrar *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                redirect('tipo/cadastro');
            }
        }
    }
    public function deletar($id)
    {
        if ($id > 0) {
            if ($this->Tipo_model->delete($id)) {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Deletado com Sucesso! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Deletar *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            }
        }
        redirect('Tipo/index');
    }
    //Update
    public function alteracao($id)
    {
        $data['Tipo'] = $this->Tipo_model->getId($id);
        $this->load->view('includes/header');
        $this->load->view('tipo/alterar', $data);
        $this->load->view('includes/footer');
    }
    public function alterar($id)
    {
        if ($id > 0) {
            $this->form_validation->set_rules('tipo', 'tipo', 'required|max_length[80]');
            if ($this->form_validation->run() == false) {
                $this->alteracao($id);
            } else {
                $data = array(
                    'type' => $this->input->post('tipo')
                );
                if ($this->Tipo_model->update($id, $data) != null) {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Alterado com Sucesso ! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Tipo/index');
                } else {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-warning"><i class="fas fa-exclamation-triangle"></i> não sofreu Alterações<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Tipo/index');
                }
            }
        }
    }
}
