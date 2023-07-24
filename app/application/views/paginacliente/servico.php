<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url()  . 'PaginaCliente/index/' . $this->session->userdata('idUsuario'); ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Serviço feito</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col">
            <h3 class="card-header bg-transparent"><i class="fas fa-list-alt"></i> Serviço feito</h3>
            <?php
            //Mensagem
            echo ($this->session->flashdata('mensagem')) ? $this->session->flashdata('mensagem') : '';
            ?>
            <div class="table-responsive">
                <table class="table table-dark table-bordered">
                    <br>
                    <thead>
                        <tr class="text-center">
                            <th scope="col">Serviço feito</th>
                            <th scope="col">Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $service = (array) json_decode($service);
                        if (count($service) > 0) {
                            foreach ($service as $s) {
                                echo '<tr class="text-center">';
                                echo '<td>' . $s->Servico . '</td>';
                                echo '<td>' . $s->Precos . '</td>';
                                echo '</tr>';
                            }
                        } else {
                            echo '<tr><td colspan="2">Nenhum Serviço cadastrado</td></tr>';
                        }
                        ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row">Valor Total</th>
                            <td colspan="7" class="text-right"><?php
                                                                $total = 0;
                                                                foreach ($service as $s) {
                                                                    $total += $s->Precos;
                                                                }
                                                                echo 'R$ ' . number_format($total, 2, ',', '.');
                                                                ?></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>