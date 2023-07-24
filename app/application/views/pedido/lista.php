<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url()  . 'Pedido/index'; ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Lista de Pedido</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col">
            <h3 class="card-header bg-transparent"><i class="fas fa-list-alt"></i> Lista de Pedido</h3>
            <?php
            //Mensagem
            echo ($this->session->flashdata('mensagem')) ? $this->session->flashdata('mensagem') : '';
            ?>
            <div class="table-responsive">
                <table class="table table-dark table-bordered">
                    <br>
                    <a class="btn btn-success mr-1" href="<?= base_url('Funcionario/cadastrar') ?>"><i class="fas fa-plus"></i> Add Funcionário</a>
                    <a class="btn btn-primary mr-1" href="<?= base_url('Pedido/newcadastrar') ?>"><i class="fas fa-plus"></i> Add New Pedido</a>
                    <a class="btn btn-info mr-1" href="<?= base_url('Pedido/cadastrar') ?>"><i class="fas fa-plus"></i> Add Pedido</a>
                    <a class="btn btn-success mr-1" href="<?= base_url('Tipo/cadastrar') ?>"><i class="fas fa-plus"></i> Add Tipo</a>
                    <a class="btn btn-info" href="<?= base_url('Status/cadastrar') ?>"><i class="fas fa-plus"></i> Add Status</a>
                    <hr>
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
                        $Pedido = (array) json_decode($Pedido);
                        if (count($Pedido) > 0) {
                            foreach ($Pedido as $p) {
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
                                echo '<td class="text-right">' . '<a class="btn btn-sm btn-outline-danger mr-2 delete" href="' . base_url('Pedido/deletar/' . $p->id) . '"><i class="fas fa-trash-alt"></i> Delete</a>' .
                                    '<a class="btn btn-sm btn-outline-warning" href="' . base_url('Pedido/alterar/' . $p->id) . '"><i class="fas fa-edit"></i> Alterar</a>'
                                    . '<a class="btn btn-sm btn-outline-warning" href="' . base_url('Servico/index/' . $p->id) . '"><i class="fas fa-edit"></i> Visualizar Serviço</a>' .
                                    '<a class="btn btn-sm btn-outline-warning" href="' . base_url('Servico/cadastrar/' . $p->id) . '"><i class="fas fa-edit"></i> Cadastrar Serviço</a>'
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