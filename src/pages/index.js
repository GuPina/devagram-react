import Image from 'next/image'
import Head from 'next/image'
import Avatar from '../../componentes/avatar'
import Botao from '../../componentes/botao'
import { UploadImagem } from '../../componentes/uploadImagem'
import { useRef, useState } from 'react'

export default function Index() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  console.log(imagem);

  return (
    <>
    <h1> Olá, mundo</h1>
    <button onClick={() => referenciaInput?.current.click()}>abrir seletor de arquivos</button>

    <UploadImagem setImagem={setImagem} imagemPreview={imagem?.preview}
    aoSetarAReferencia={(ref) => referenciaInput.current = ref}
    />

    <div style={{ width: 200 }}>
      <Avatar />
      <Botao texto={'Login'} cor='invertido' manipularClique={() => console.log('botao clicado')} />
    </div>
    </>
  )
}

