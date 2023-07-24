<div class="container mt-3">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?= base_url()  . 'Pedido/index'; ?>">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Lista de Serviço</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col">
            <h3 class="card-header bg-transparent"><i class="fas fa-list-alt"></i> Lista de Serviço</h3>
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
                            <th scope="col">Opção</th>
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
                                echo '<td class="text-right">' . '<a class="btn btn-sm btn-outline-danger mr-2 delete" href="' . base_url('Servico/deletar/' . $s->cd_servicos) . '"><i class="fas fa-trash-alt"></i> Delete</a>' .
                                    '<a class="btn btn-sm btn-outline-warning" href="' . base_url('Servico/alterar/' . $s->cd_servicos) . '"><i class="fas fa-edit"></i> Alterar</a>'
                                    . '</td>';
                                echo '</tr>';
                            }
                        } else {
                            echo '<tr><td colspan="3">Nenhum Serviço cadastrado</td></tr>';
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