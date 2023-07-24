</div>
<style>
    .social:hover {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
    }

    .social {
        -webkit-transform: scale(0.8);
        /* Browser Variations: */
        -moz-transform: scale(0.8);
        -o-transform: scale(0.8);
        -webkit-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        -o-transition-duration: 0.5s;
    }

    /*houver*/
    #social-git:hover {
        color: #f9ca24;
    }

    #social-tw:hover {
        color: #130f40;
    }

    #social-gp:hover {
        color: #d34836;
    }

    #social-em:hover {
        color: #f39c12;
    }
</style>
<!-- Footer -->
<footer class="page-footer font-small pt-4" style="background-color:#4834d4;">
    <div class="container-fluid text-center text-md-left">
        <div class="row">
            <div class="offset-2 col-md-4">
                <h5 class="text-uppercase text-light">OS</h5>
                <p class="text-light"><i class="fas fa-phone"></i> (00) 0000-0000</p>
                <p class="text-light"><i class="fas fa-envelope"></i> chih.yang@aluno.sc.senac.br</p>
                <p class="text-light"><i class="fas fa-map-marker-alt"></i> Rua Wireframe 325</p>
                <p class="text-light"><i class="fas fa-clock"></i> Seg ~ Sex: 22:00 ~ 5:00</p>
            </div>
            <div class="col-md-3 mb-md-0 mb-1">
                <h5 class="text-uppercase text-light">Instale nosso APP</h5>
                <div class="row">
                    <img src="<?php echo base_url('/assets/logo/download_qr.png'); ?>" class="img-fluid" width="150" height="150" alt="qrcode">
                    <a href="https://play.google.com/store/apps/details?id=com.chihyaoyang.api_contatos"><img src="<?php echo base_url('/assets/logo/googleplay.png'); ?>" class="img-fluid"width="150" height="150" alt="googleplay"></a>
                </div>
            </div>

        </div>
    </div>
    <div class="text-center center-block" style="background:#7ed6df;">
        <a href="https://github.com/ChihYaoYang/ProjetoOS_Web"><i id="social-git" class="fab fa-github-square fa-3x social"></i></a>
        <a href="#"><i id="social-tw" class="fab fa-twitter-square fa-3x social"></i></a>
        <a href="#"><i id="social-gp" class="fab fa-google-plus-square fa-3x social"></i></a>
        <a href="#"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
    </div>
</footer>
<!--Bootstrap-->
<script type='text/javascript' src="<?php echo base_url('/assets/JS/bootstrap1.js'); ?>"></script>
<script type='text/javascript' src="<?php echo base_url('/assets/JS/bootstrap2.js'); ?>"></script>
<script type='text/javascript' src="<?php echo base_url('/assets/JS/bootstrap3.js'); ?>"></script>
<!--Caousel JS-->
<script type='text/javascript' src="<?php echo base_url('/assets/JS/carrousel1.js'); ?>"></script>
<script type='text/javascript' src="<?php echo base_url('/assets/JS/carrousel2.js'); ?>"></script>
<script type='text/javascript' src="<?php echo base_url('/assets/JS/carrousel3.js'); ?>"></script>
<script type='text/javascript' src="<?php echo base_url('/assets/JS/carrousel4.js'); ?>"></script>
<!--Confirmation-->
<script type='text/javascript' src="<?php echo base_url('/assets/JS/confirmation.js'); ?>"></script>
<!--TextArea-->
<script type='text/javascript' src="<?php echo base_url('/assets/JS/textarea.js'); ?>"></script>
<!--Jquery-->
<script type='text/javascript' src="<?php echo base_url('/assets/JS/jquery.js'); ?>"></script>
<!--Mascara-->
<script type='text/javascript' src="<?php echo base_url('/assets/JS/mascara.js'); ?>"></script>
<!--Menu-->
<script type='text/javascript' src="<?php echo base_url('/assets/JS/menu.js'); ?>"></script>
</body>

</html>