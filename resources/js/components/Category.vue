<template>
     <div id="layoutSidenav_content">
               
                    <div class="container-fluid">
                        <h1 class="mt-4">Dashboardss</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Categories</li>
                        </ol>
                       
                        
                          
                                <div class="card mb-5">
                                    <div class="card-header d-flex">
                                        <span>
                                           <i class="fas fa-chart-area"></i>
                                           Categories Management
                                       </span>
                                       
                                       <button class="btn btn-primary btn-sm ml-auto" v-on:click="showNewCategoryModal"><span class="fa fa-plus"></span>Create New</button>
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
                           
                    
                       
                 
            <b-modal ref="newCategoryModal" hide-footer title="Using Component Methods">
              <div class="d-block text-center">
                <form v-on:submit.prevent="CreateCategory">
                     <div class="form-group">
                         <label for="name">Enter Name</label>
                         <input type="text" v-model="CategoryData.name" class="form-control" id="name"  placeholder="Enter Name">
                        
                     </div>

                      <div class="form-group">
                         <label for="image">choose an image</label>
                         <input type="file" v-on:change="attachImage" class="form-control" id="image"  placeholder="Enter image">
                        
                     </div>

                     <hr>


                     <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModel">cancel</button>
                     <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span>Save</button>
                </form>
              </div>
    
            </b-modal>

          
            </div>
</template>

<script>
export default {
    name: 'Category',
    data() {
        return {
            CategoryData: {
                name: '',
                image: ''
            }
        }
    },
    methods:{
        attachImage(){

        },
        showNewCategoryModal(){
           this.$refs.newCategoryModal.show();
        },
        hideNewCategoryModel(){
            this.$refs.newCategoryModal.hide();
        },
        CreateCategory(){
            console.log('form submitted');
        }

        
    }
}
</script>