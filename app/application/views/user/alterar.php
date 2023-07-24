<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url()  . 'PaginaCliente/index/' . $this->session->userdata('idUsuario'); ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Alteração da User</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col">
            <div class="col-md-8 offset-md-2 col-xs-12">
                <!---Card--->
                <div class="card">
                    <h3 class="card-header bg-transparent"><i class="fas fa-edit"></i>Alteração da User</h3>
                    <div class="card-body">
                        <?php echo validation_errors(); ?>
                        <form method="POST" action="
                        <?php
                        $user = (array) json_decode($user);
                        foreach ($user as $c) {
                            base_url() . 'Login/alterar/' . $c->id;
                        } ?>
                        ">
                            <?php
                            //Mensagem
                            echo ($this->session->flashdata('mensagem')) ? $this->session->flashdata('mensagem') : '';
                            ?>
                            <input type="hidden" name="id" id="id" value="">

                            <div>
                                <label for="nome">Nome</label>
                                <div class="input-group mb-2">
                                    <?php
                                    foreach ($user as $c) {
                                        echo '<input type="text" class="form-control" id="nome" name="nome" value="' . $c->nome . '">';
                                    }
                                    ?>
                                </div>
                            </div>

                            <?php
                            foreach ($user as $c) {
                                echo   '<input type="hidden" name="email" id="email" value="' . $c->email . '">';
                            }
                            ?>

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
                                    foreach ($user as $c) {
                                        echo '<input type="number" class="form-control" id="telefone" name="telefone" value="' . $c->telefone . '">';
                                    }
                                    ?>
                                </div>
                            </div>
                            <?php
                            foreach ($user as $c) {
                                echo  '<input type="hidden" name="cpf" id="cpf" value="' . $c->cpf . '">';
                            }
                            ?>

                            <div class="text-center">
                                <button type="submit" class="btn btn-success"><i class="fas fa-save"></i> Alterar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>