<template>
     <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                        <h1 class="mt-4">Dashboard</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Categories</li>
                        </ol>
                       
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <i class="fas fa-chart-area mr-1"></i>
                                       Categories Management
                                    </div>
                                    <div class="card-body">
                                     <table class="table">
                                        <thead>
                                            <tr>
                                                 <td>ID</td>
                                                 <td>Name</td>
                                                 <td>Image</td>
                                                 <td>Action</td>

                                            </tr>
                                            
                                            </thead> 
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Adnan</td>
                                                    <td>Image</td>
                                                    <td>
                                                        <button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
                                                        <button class="btn btn-primary btn-sm"><span class="fa fa-trash"></span></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                         
                                        </table>   
                                        
                                   </div>
                                </div>
                            </div>
                           
                        </div>
                       
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
</template>