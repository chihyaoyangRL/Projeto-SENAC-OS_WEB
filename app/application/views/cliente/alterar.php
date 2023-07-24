<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url() . 'Pedido/index'; ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Alteração de Cliente</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col-md-8 offset-md-2 col-xs-12">
            <div class="card">
                <h3 class="card-header bg-transparent"> <i class="fas fa-edit"></i>Alteração de Cliente</h3>
                <div class="card-body">
                    <?php echo validation_errors(); ?>
                    <form method="POST" action=" 
                    <?php
                    $client = (array) json_decode($client);
                    foreach ($client as $c) {
                        base_url() . 'Cliente/alterar/' . $c->id;
                    }
                    ?>">
                        <?php
                        //Mensagem
                        echo ($this->session->flashdata('mensagem')) ? $this->session->flashdata('mensagem') : '';
                        ?>
                        <?php

                        foreach ($client as $c) {
                            echo '<input type="hidden" name="id" id="id" value="' . $c->id . '">';
                        }
                        ?>
                        <div>
                            <label for="nome">Nome</label>
                            <div class="input-group mb-2">
                                <?php
                                foreach ($client as $c) {
                                    echo '<input type="text" class="form-control" id="nome" name="nome" value="' . $c->nome . '">';
                                }
                                ?>
                            </div>
                        </div>

                        <div>
                            <label for="email">E-mail</label>
                            <div class="input-group mb-2">
                                <?php
                                foreach ($client as $c) {
                                    echo '<input type="text" class="form-control" id="email" name="email" value="' . $c->email . '">';
                                }
                                ?>
                            </div>
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control" id="password" name="password" value="">
                            </div>
                        </div>
                        <div>
                            <label for="telefone">Telefone</label>
                            <div class="input-group mb-2">
                                <?php
                                foreach ($client as $c) {
                                    echo '<input type="number" class="form-control" id="telefone" name="telefone" value="' . $c->telefone . '">';
                                }
                                ?>
                            </div>
                        </div>
                        <div>
                            <label for="cpf">CPF</label>
                            <div class="input-group mb-2">
                                <?php
                                foreach ($client as $c) {
                                    echo '<input type="text" class="cpf form-control" id="cpf" name="cpf" value="' . $c->cpf . '">';
                                }
                                ?>
                            </div>
                        </div>
                        <!--Button-->
                        <div class=" text-center">
                            <button type="submit" class="btn btn-success"><i class="fas fa-save"></i> Alterar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>