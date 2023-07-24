<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Status extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Status_model');
        $this->load->model('Login_model');
        $this->Login_model->verificaLogin();
        $this->Login_model->checkSession();
    }

    public function index()
    {
        $data['Status'] = $this->Status_model->getAll();
        $this->load->view('includes/header');
        $this->load->view('status/lista', $data);
        $this->load->view('includes/footer');
    }
    //Insert
    public function cadastro()
    {
        $this->load->view('includes/header');
        $this->load->view('status/cadastro');
        $this->load->view('includes/footer');
    }
    public function cadastrar()
    {
        $this->form_validation->set_rules('status', 'status', 'required|is_unique[status.status]|max_length[80]');
        if ($this->form_validation->run() == false) {
            $this->cadastro();
        } else {
            $data = array(
                'status' => $this->input->post('status')
            );
            if ($this->Status_model->insert($data) != null) {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Cadastrado com Sucesso! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                redirect('Status/index');
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Cadastrar *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                redirect('Status/cadastro');
            }
        }
    }
    public function deletar($id)
    {
        if ($id > 0) {
            if ($this->Status_model->delete($id)) {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Deletado com Sucesso! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Deletar *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            }
        }
        redirect('Status/index');
    }
    //Update
    public function alteracao($id)
    {
        $data['Status'] = $this->Status_model->getId($id);
        $this->load->view('includes/header');
        $this->load->view('status/alterar', $data);
        $this->load->view('includes/footer');
    }
    public function alterar($id)
    {
        if ($id > 0) {
            $this->form_validation->set_rules('status', 'status', 'required|max_length[80]');
            if ($this->form_validation->run() == false) {
                $this->alteracao($id);
            } else {
                $data = array(
                    'status' => $this->input->post('status')
                );
                if ($this->Status_model->update($id, $data) != null) {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Alterado com Sucesso ! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Status/index');
                } else {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-warning"><i class="fas fa-exclamation-triangle"></i> não sofreu Alterações<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Status/index');
                }
            }
        }
    }
}
