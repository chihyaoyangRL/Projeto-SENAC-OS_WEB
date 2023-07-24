<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url() . 'Pedido/index'; ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Lista de Funcionário</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col">
            <h3 class="card-header bg-transparent"><i class="fas fa-list-alt"></i> Lista de Funcionário</h3>
            <?php
            //Mensagem
            echo ($this->session->flashdata('mensagem')) ? $this->session->flashdata('mensagem') : '';
            ?>
            <div class="table-responsive">
                <table class="table table-dark table-bordered">
                    <br>
                    <a class="btn btn-success mr-1" href="<?= base_url('Funcionario/cadastrar') ?>"><i class="fas fa-plus"></i> Add Funcionário</a>
                    <a class="btn btn-info mr-1" href="<?= base_url('Pedido/cadastrar') ?>"><i class="fas fa-plus"></i> Add Pedido</a>
                    <a class="btn btn-success mr-1" href="<?= base_url('Tipo/cadastrar') ?>"><i class="fas fa-plus"></i> Add Tipo</a>
                    <a class="btn btn-info" href="<?= base_url('Status/cadastrar') ?>"><i class="fas fa-plus"></i> Add Status</a>
                    <hr>
                    <thead>
                        <tr class="text-center">
                            <th scope="col">Nome do Funcionário</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $func = (array) json_decode($func);
                        if (count($func) > 0) {
                            foreach ($func as $f) {
                                echo '<tr class="text-center">';
                                echo '<td>' . $f->nome . '</td>';
                                echo '<td>' . $f->email . '</td>';
                                echo '<td>' . $f->telefone . '</td>';
                                echo '<td>' . $f->cpf . '</td>';
                                echo '<td class="text-right">' . '<a class="btn btn-sm btn-outline-danger mr-2 delete" href="' . base_url('Funcionario/deletar/' . $f->id) . '"><i class="fas fa-trash-alt"></i> Delete</a>' .
                                    '<a class="btn btn-sm btn-outline-warning" href="' . base_url('Funcionario/alterar/' . $f->id) . '"><i class="fas fa-edit"></i> Alterar</a>'
                                    . '</td>';
                                echo '</tr>';
                            }
                        } else {
                            echo '<tr><td colspan="5">Nenhum Funcionário cadastrado</td></tr>';
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>