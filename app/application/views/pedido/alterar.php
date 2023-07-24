<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url() . 'Pedido/index'; ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Alteração de Pedido</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col-md-8 offset-md-2 col-xs-12">
            <div class="card">
                <h3 class="card-header bg-transparent"> <i class="fas fa-edit"></i>Alteração de Pedido</h3>
                <div class="card-body">
                    <?php echo validation_errors(); ?>
                    <form method="POST" action=" 
                    <?php
                    $pedido = (array) json_decode($pedido);
                    foreach ($pedido as $p) {
                        base_url() . 'Pedido/alterar/' . $p->id;
                    }
                    ?>">
                        <?php
                        //Mensagem
                        echo ($this->session->flashdata('mensagem')) ? $this->session->flashdata('mensagem') : '';
                        ?>
                        <?php
                        foreach ($pedido as $p) {
                            echo '<input type="hidden" name="id" id="id" value="' . $p->id . '">';
                        }
                        ?>
                        <div>
                            <label for="cd_cliente">Cliente</label>
                            <div class="input-group mb-2">
                                <select id="cd_cliente" name="cd_cliente" class="form-control">
                                    <option value="">Seleciona Cliente</option>
                                    <?php
                                    $client = (array) json_decode($client);
                                    if (count($client) > 0) {
                                        foreach ($client as $c) {
                                            echo '<option ' . ($p->cd_cliente == $c->id ? 'selected ' : null) . ' value="' . $c->id . '">' . $c->nome . '</option>';
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
                                            echo '<option ' . ($p->cd_tipo == $t->id ? 'selected ' : null) . ' value="' . $t->id . '">' . $t->type . '</option>';
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
                                            echo '<option ' . ($p->cd_status == $s->id ? 'selected ' : null) . ' value="' . $s->id . '">' . $s->status . '</option>';
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
                                <?php
                                foreach ($pedido as $p) {
                                    echo '<input type="text" class="form-control" id="marca" name="marca" value="' . $p->marca . '">';
                                }
                                ?>
                            </div>
                        </div>
                        <div>
                            <label for="modelo">Modelo</label>
                            <div class="input-group mb-2">
                                <?php
                                foreach ($pedido as $p) {
                                    echo '<input type="text" class="form-control" id="modelo" name="modelo" value="' . $p->modelo . '">';
                                }
                                ?>
                            </div>
                        </div>
                        <label for="defeito">Defeito</label>
                        <div class="form-group">
                            <?php
                            foreach ($pedido as $p) {
                                echo '<textarea class="form-control" id="defeito" name="defeito" rows="3" placeholder="">' . $p->defeito . '</textarea>';
                            }
                            ?>
                        </div>
                        <label for="descricao">Descrição</label>
                        <div class="form-group">
                            <?php
                            foreach ($pedido as $p) {
                                echo '<textarea class="form-control" id="descricao" name="descricao" rows="3" placeholder="">' . $p->descricao . '</textarea>';
                            }
                            ?>
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