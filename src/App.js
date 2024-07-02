import * as React from "react";
import MessageNotification from "./components/MessageNotification";

/**
  - Utilize o componente MessageNotification para mostrar o status
  das mensagens não lidas
  - Se não houver mensagens, mostre: Você não tem novas mensagens
  - Se unreadMessages > 0, mostre: Você tem <n> mensagem(s) não lida(s)
  - Se unreadMessages === 1, as palavras mensagem e lida devem 
    estar no singular
  - Se unreadMessages > 1, as palavras mensagens e lidas devem 
    estar no plural
  - Manipule os dados default de unreadMessages para testar 
  todos cenários
*/

export default function App() {
  const [unreadMessages] = React.useState(["a", "b"]);

  return (
    <div data-testid="App">
      <MessageNotification unreadMessagesTotal={unreadMessages.length} />
    </div>
  );
}
