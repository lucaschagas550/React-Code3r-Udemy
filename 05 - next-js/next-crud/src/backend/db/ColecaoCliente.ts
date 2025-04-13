import Cliente from "../../core/Cliente";
import { firestore } from "../config"; // ajuste o import
import ClienteRepositorio from "../../core/ClienteRepositorio";
// import { collection, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import firebase from "firebase/firestore";

export default class ColecaoCliente implements ClienteRepositorio {
  private conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      };
    },
    fromFirestore(
      snapshot: firebase.QueryDocumentSnapshot,
      options: firebase.SnapshotOptions
    ) {
      const dados = snapshot.data(options);
      return new Cliente(dados.nome, dados.idade, snapshot.id);
    },
  };

  async salvar(cliente: Cliente): Promise<Cliente> {
    const colecaoRef = this.colecao();

    if (cliente?.id) {
      const docRef = firebase.doc(colecaoRef, cliente.id);
      await firebase.setDoc(docRef, cliente); // usa o conversor automaticamente
      return cliente;
    } else {
      const docRef = await firebase.addDoc(colecaoRef, cliente); // usa o conversor automaticamente
      return new Cliente(cliente.nome, cliente.idade, docRef.id);
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    const docRef = firebase.doc(this.colecao(), cliente.id);
    return await firebase.deleteDoc(docRef);
  }

  async obterTodos(): Promise<Cliente[]> {
    const snapshot = await firebase.getDocs(this.colecao());
    return snapshot.docs.map(doc => doc.data());
  }

  private colecao() {
    return firebase
      .collection(firestore, "clientes")
      .withConverter(this.conversor);
  }
}
