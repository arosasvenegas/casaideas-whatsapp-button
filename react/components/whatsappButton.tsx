import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, "%20")

    return <>
      <div className="fixed bottom-1 right-2 flex felxColum">
        <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel= "noreferrer noopener"
        >
          <img src={logo} width={width} height={height} alt="Logo de WhatsApp"/>
        </a>
      </div>
    </>
}

WhatsappButton.prototype = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaulProps = {
  logo: "mi-logo.png",
  phone: "3004507575",
  message: "Estás comunicándote con VTEX University, por favor ingresa tu duda.",
  width: 80,
  height: 80
}

WhatsappButton.schema = {
  title: "Botón de WhatsApp",
  type: "object",
  properties: {
    logo: {
      title: "Logo de whatsApp que se relacione con la marca",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Teléfono",
      description: "Agrega por favor el número de teléfono",
      type: "string"
    },
    message: {
      title: "Mensaje",
      description: "Agrega por favor el mensaje que se verá para tu cliente",
      type: "string",
      widget: {
        "ui.widget": "textarea"
      }
    },
    width: {
      title: "Teléfono",
      description: "Agrega por favor el número de teléfono",
      type: "number"
    },
    height: {
      title: "Teléfono",
      description: "Agrega por favor el número de teléfono",
      type: "number"
    }
  }
}


export default WhatsappButton
