class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    

    render(){
        this.innerHTML = `
        <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Movie21</a>
          </div>
        </nav>
        `;
    }
}


class AppMain extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    

    render(){
        this.innerHTML = `
        <div class="container-fluid p-5" >
            <div class="row">
                <div class="col-2">
                    <h4>Movie-DB</h1>                
                    <div class="input-group mb-3">
                        <input type="text" class="form-control keyword" placeholder="search here">
                        <div class="input-group-append">
                            <button class="btn btn-dark btn-search">Search</button>
                        </div>
                    </div>
                </div>
                <div class="col-10">
                    <div class="row movie-container">
                
                    </div>
                </div>
            </div>
            
        </div>


        
        <!-- Modal -->
        <div class="modal fade" id="detailMovie" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Detail</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
            
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>            
                </div>
            </div>
            </div>
        </div>
        `;
        
    }
}


customElements.define("app-bar", AppBar);
customElements.define("app-main", AppMain);

