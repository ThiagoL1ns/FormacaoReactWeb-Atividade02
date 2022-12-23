import './App.css';

function App() {
  return (
    <div>
      <html>
        <head>
          <title>Atividade 02 HTML</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        </head>
        <body>
          <div class="p-4">
            <div class="row justify-content-center align-items-center vh-100">
              <div class="col-8">
                <img class="img-fluid w-100 h-100" src='https://www.goldmansachs.com/insights/pages/multimedia/the-future-of-coding-is-conversation.jpg'/>
              </div>
              <div class="col-4">
                <form action="" class="p-5 border border-dark padding-top">
                  <h1 class="text-center my-4">Login</h1>
                  <label>Email</label>
                  <input type="text" name="email" class="form-control my-2"/> <br />
                  <label>Senha</label>
                  <input type="text" name="senha" class="form-control my-2"/> <br />
                  <div class="d-grid my-4">
                    <button type="submit" class="btn btn-primary p-2">Salvar</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}

export default App;