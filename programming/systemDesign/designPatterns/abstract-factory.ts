/*
En el codigo realizaremos un Abstract Factory
para una abstraccion de un la creacion documentos
de varios tipos de formatos
*/

// Creacion de interfaces.
interface DocumentFactory {
  createDocument(): Document
}

class PDFFactory implements DocumentFactory {

  createDocument(): Document {
    return new PDFDocument()
  }
}

class DocFactory implements DocumentFactory {

  createDocument(): Document {
    return new DocDocument()
  }
}

interface Document {
  save(): void
}

class PDFDocument implements Document {
  save(): void {}
}

class DocDocument implements Document {
  save(): void {}
}

class Application {
  private factory: DocumentFactory
  private document: Document

  constructor(factory: DocumentFactory) {
    this.factory = factory
  }

  createDocument(): Document {
    return this.factory.createDocument()
  }
}

class ApplicationConfigurator {

  main() {
    const config = readApplicationFile()

    if (config.type == 'PDF') {
      return new PDFFactory()
    } else if (config.type == 'Doc') {
      return new DocFactory()
    } else {
      throw new Error('Error! Unknown format.')
    }
  }
}

function readApplicationFile() {
  return {
    type: 'PDF'
  }
}

const app = new ApplicationConfigurator()
const factory = app.main() // PDFFactory

