<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url()  . 'PaginaCliente/index/' . $this->session->userdata('idUsuario'); ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Pedido Solicitado</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col">
            <h3 class="card-header bg-transparent"><i class="fas fa-list-alt"></i> Pedido Solicitado</h3>
            <?php
            //Mensagem
            echo ($this->session->flashdata('mensagem')) ? $this->session->flashdata('mensagem') : '';
            ?>
            <div class="table-responsive">
                <table class="table table-dark table-bordered">
                    <br>
                    <thead>
                        <tr class="text-center">
                            <th scope="col">Nome do Cliente</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cadastrado por</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Defeito</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Data de Pedido</th>
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $item = (array) json_decode($item);
                        if (count($item) > 0) {
                            foreach ($item as $p) {
                                echo '<tr class="text-center">';
                                echo '<td>' . $p->Cliente . '</td>';
                                echo '<td>' . $p->Tipo . '</td>';
                                echo '<td>' . $p->Status . '</td>';
                                echo '<td>' . $p->Funcionario . '</td>';
                                echo '<td>' . $p->marca . '</td>';
                                echo '<td>' . $p->modelo . '</td>';
                                echo '<td>' . $p->defeito . '</td>';
                                echo '<td>' . $p->descricao . '</td>';
                                echo '<td>' . $p->data_pedido . '</td>';
                                echo '<td class="text-right">' .
                                    '<a class="btn btn-sm btn-outline-warning" href="' . base_url('PaginaCliente/servico/' . $p->id) . '"><i class="fas fa-edit"></i> Visualizar Serviço</a>'
                                    . '</td>';
                                echo '</tr>';
                            }
                        } else {
                            echo '<tr><td colspan="10">Nenhum Pedido cadastrado</td></tr>';
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>