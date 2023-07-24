<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url() . 'Pedido/index'; ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Cadastro de Pedido</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col-md-8 offset-md-2 col-xs-12">
            <div class="card">
                <h3 class="card-header bg-transparent"> <i class="fas fa-edit"></i>Formulário de Pedido</h3>
                <div class="card-body">
                    <?php echo validation_errors(); ?>
                    <form method="POST" action="<?= base_url() . 'Pedido/cadastrar' ?>">
                        <?php
                        //Mensagem
                        echo ($this->session->flashdata('mensagem')) ? $this->session->flashdata('mensagem') : '';
                        ?>
                        <input type="hidden" name="id" id="id">
                        <div>
                            <label for="cd_cliente">Cliente</label>
                            <div class="input-group mb-2">
                                <select id="cd_cliente" name="cd_cliente" class="form-control">
                                    <option value="">Seleciona Cliente</option>
                                    <?php
                                    $client = (array) json_decode($client);
                                    if (count($tipo) > 0) {
                                        foreach ($client as $c) {
                                            echo '<option value="' . $c->id . '" ' . set_select('cd_cliente', $c->id) . ' >' . $c->nome . '</option>';
                                        }
                                    } else {
                                        echo '<option value="">Nenhuma Cliente cadastrada.</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="cd_tipo">Tipo</label>
                            <div class="input-group mb-2">
                                <select id="cd_tipo" name="cd_tipo" class="form-control">
                                    <option value="">Seleciona Tipo</option>
                                    <?php
                                    $tipo = (array) json_decode($tipo);
                                    if (count($tipo) > 0) {
                                        foreach ($tipo as $t) {
                                            echo '<option value="' . $t->id . '" ' . set_select('cd_tipo', $t->id) . ' >' . $t->type . '</option>';
                                        }
                                    } else {
                                        echo '<option value="">Nenhuma Tipo cadastrada.</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="cd_status">Status</label>
                            <div class="input-group mb-2">
                                <select id="cd_status" name="cd_status" class="form-control">
                                    <option value="">Seleciona Status</option>
                                    <?php
                                    $status = (array) json_decode($status);
                                    if (count($status) > 0) {
                                        foreach ($status as $s) {
                                            echo '<option value="' . $s->id . '" ' . set_select('cd_status', $s->id) . ' >' . $s->status . '</option>';
                                        }
                                    } else {
                                        echo '<option value="">Nenhuma Status cadastrada.</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="marca">Marca</label>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control" id="marca" name="marca" value="<?php echo set_value('marca') ?>">
                            </div>
                        </div>
                        <div>
                            <label for="modelo">Modelo</label>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control" id="modelo" name="modelo" value="<?php echo set_value('modelo') ?>">
                            </div>
                        </div>
                        <label for="defeito">Defeito</label>
                        <div class="form-group">
                            <textarea class="form-control" id="defeito" name="defeito" rows="3" placeholder="Defeito "></textarea>
                        </div>
                        <label for="descricao">Descrição</label>
                        <div class="form-group">
                            <textarea class="form-control" id="descricao" name="descricao" rows="3" placeholder="Descrição do Produto"></textarea>
                        </div>
                        <!--Button-->
                        <div class="text-center">
                            <button type="submit" class="btn btn-success"><i class="fas fa-save"></i> Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>