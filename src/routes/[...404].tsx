import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import "./cs404.scss";

export default function NotFound() {
  return (
    <main class="container">
      <Title>404</Title>
      <HttpStatusCode code={404} />

      <div class="content">
        <h1 class="ops">OPA</h1>
        <p>Você bebeu demais</p>
        <button class="button-4" onClick={() => (window.location.href = "/")}>
          volte pra festa
        </button>
      </div>
      <img class="people" src="/people.png" alt="404" />
    </main>
  );
}
