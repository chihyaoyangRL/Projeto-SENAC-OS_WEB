<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Servico extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Servico_model');
        $this->load->model('Pedido_model');
        $this->load->model('Login_model');
        $this->Login_model->verificaLogin();
        $this->Login_model->checkSession();
    }

    public function index($id)
    {
        $data['service'] = $this->Servico_model->getOne($id);
        $this->load->view('includes/header');
        $this->load->view('servico/lista', $data);
        $this->load->view('includes/footer');
    }
    //Insert
    public function cadastro($id)
    {
        $this->load->view('includes/header');
        $this->load->view('servico/cadastro', $id);
        $this->load->view('includes/footer');
    }
    public function cadastrar($id)
    {
        $this->form_validation->set_rules('servico', 'servico', 'required|max_length[80]');
        $this->form_validation->set_rules('precos', 'preço', 'required|max_length[13]');
        if ($this->form_validation->run() == false) {
            $this->cadastro($id);
        } else {
            $data = array(
                'servico' => $this->input->post('servico'),
                'precos' => $this->input->post('precos'),
            );
            if ($this->Servico_model->insert($id, $data)) {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Cadastrado com Sucesso! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                redirect('Servico/index/' . $id);
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Cadastrar *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                redirect('Servico/cadastro/' . $id);
            }
        }
    }
    public function deletar($id)
    {
        if ($id > 0) {
            if ($this->Servico_model->delete($id)) {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Deletado com Sucesso! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            } else {
                $this->session->set_flashdata('mensagem', '<div class="alert alert-danger"><i class="fas fa-times"></i> Erro ao Deletar *_*<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
            }
        }
        redirect('Pedido/index');
    }
    //Update
    public function alteracao($id)
    {
        $data['Servico'] = $this->Servico_model->getId($id);
        $this->load->view('includes/header');
        $this->load->view('servico/alterar', $data);
        $this->load->view('includes/footer');
    }
    public function alterar($id)
    {
        if ($id > 0) {
            $this->form_validation->set_rules('servico', 'servico', 'required|max_length[80]');
            $this->form_validation->set_rules('precos', 'preço', 'required|max_length[13]');
            if ($this->form_validation->run() == false) {
                $this->alteracao($id);
            } else {
                $data = array(
                    'servico' => $this->input->post('servico'),
                    'precos' => $this->input->post('precos'),
                );
                if ($this->Servico_model->update($id, $data) != null) {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-success"><i class="fas fa-check"></i> Alterado com Sucesso ! ! !<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Pedido/index');
                } else {
                    $this->session->set_flashdata('mensagem', '<div class="alert alert-warning"><i class="fas fa-exclamation-triangle"></i> não sofreu Alterações<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>');
                    redirect('Pedido/index');
                }
            }
        }
    }
}
