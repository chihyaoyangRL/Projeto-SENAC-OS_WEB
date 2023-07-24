<?php

defined('BASEPATH') or exit('No direct script access allowed');

class PaginaCliente extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Pedido_model');
        $this->load->model('Login_model');
        $this->load->model('Servico_model');
        $this->Login_model->verificaLogin();
    }

    public function index($id)
    {
        $data['item'] = $this->Pedido_model->getClientPedido($id);
        $this->load->view('includes/header');
        $this->load->view('paginacliente/lista', $data);
        $this->load->view('includes/footer');
    }
    public function servico($id)
    {
        $data['service'] = $this->Servico_model->getOne($id);
        $this->load->view('includes/header');
        $this->load->view('paginacliente/servico', $data);
        $this->load->view('includes/footer');
    }
}
