<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url() . 'Pedido/index'; ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Cadastro de Status</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col-md-8 offset-md-2 col-xs-12">
            <div class="card">
                <h3 class="card-header bg-transparent"> <i class="fas fa-edit"></i>Formulário de Status</h3>
                <div class="card-body">
                    <?php echo validation_errors(); ?>
                    <form method="POST" action="<?= base_url() . 'Status/cadastrar' ?>">
                        <?php
                        //Mensagem
                        echo ($this->session->flashdata('mensagem')) ? $this->session->flashdata('mensagem') : '';
                        ?>
                        <input type="hidden" name="id" id="id">
                        <!--Cor-->
                        <div>
                            <label for="status">Status</label>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control" id="status" name="status" value="<?php echo set_value('status') ?>">
                            </div>
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