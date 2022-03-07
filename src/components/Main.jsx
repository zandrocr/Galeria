import '../sass/main.css'

const Main = () => {
    return ( <main className="container">
        <div class="gallery d-flex flex-column">
            <span className="d-flex flex-column flex-lg-row justify-content-around">
                <div class="card gallery-card col-12 col-lg-3" id="card-1">
                    <h2 class="gallery-card-title">Animais</h2>
                    <a href="" class="gallery-card-btn">Mais fotos</a>
                </div>
                <div class="card gallery-card col-12 col-lg-3" id="card-2">
                    <h2 class="gallery-card-title">Arquitetura</h2>
                    <a href="" class="gallery-card-btn">Mais fotos</a>
                </div>
                <div class="card gallery-card col-12 col-lg-3" id="card-3">
                    <h2 class="gallery-card-title">Cidades</h2>
                    <a href="" class="gallery-card-btn">Mais fotos</a>
                </div>
            </span>
            <span className="d-flex flex-column flex-lg-row justify-content-around">
                <div class="card gallery-card col-12 col-lg-3" id="card-4">
                    <h2 class="gallery-card-title">Decorações</h2>
                    <a href="" class="gallery-card-btn">Mais fotos</a>
                </div>
                <div class="card gallery-card col-12 col-lg-3" id="card-5">
                    <h2 class="gallery-card-title">Esportes</h2>
                    <a href="" class="gallery-card-btn">Mais fotos</a>
                </div>
                <div class="card gallery-card col-12 col-lg-3" id="card-6">
                    <h2 class="gallery-card-title">Natureza</h2>
                    <a href="" class="gallery-card-btn">Mais fotos</a>
                </div>
            </span>
            <span className="d-flex flex-column flex-lg-row justify-content-around">
                <div class="card gallery-card col-12 col-lg-3" id="card-7">
                    <h2 class="gallery-card-title">Paisagem</h2>
                    <a href="" class="gallery-card-btn">Mais fotos</a>
                </div>
                <div class="card gallery-card col-12 col-lg-3" id="card-8">
                    <h2 class="gallery-card-title">Pessoas</h2>
                    <a href="" class="gallery-card-btn">Mais fotos</a>
                </div>
                <div class="card gallery-card col-12 col-lg-3" id="card-9">
                    <h2 class="gallery-card-title">Refeições</h2>
                    <a href="" class="gallery-card-btn">Mais fotos</a>
                </div>
            </span>

        </div>
    </main> );
}

export default Main;