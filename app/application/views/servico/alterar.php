<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url() . 'Pedido/index'; ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Alteração de Serviço</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col-md-8 offset-md-2 col-xs-12">
            <div class="card">
                <h3 class="card-header bg-transparent"> <i class="fas fa-edit"></i>Alteração de Serviço</h3>
                <div class="card-body">
                    <?php echo validation_errors(); ?>
                    <form method="POST" action=" 
                    <?php
                    $Servico = (array) json_decode($Servico);
                    foreach ($Servico as $s) {
                        base_url() . 'Servico/alterar/' . $s->id;
                    }
                    ?>">
                        <?php
                        //Mensagem
                        echo ($this->session->flashdata('mensagem')) ? $this->session->flashdata('mensagem') : '';
                        ?>
                        <?php

                        foreach ($Servico as $s) {
                            echo '<input type="hidden" name="id" id="id" value="' . $s->id . '">';
                        }
                        ?>
                        <label for="servico">Serviço</label>
                        <div class="form-group">
                            <?php
                            foreach ($Servico as $s) {
                                echo '<textarea class="form-control" id="servico" name="servico" rows="3" placeholder="">' . $s->servico . '</textarea>';
                            }
                            ?>
                        </div>
                        <div>
                            <label for="precos">Preço</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">R$</div>
                                </div>
                                <?php
                                foreach ($Servico as $s) {
                                    echo '<input type="text" class="money form-control" id="precos" name="precos" maxlength="13" value="' . $s->precos . '">';
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