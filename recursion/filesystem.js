// Filesystem
// Print a representation of the following filesystem.
const filesystem = {
  type: "folder",
  name: "root",
  files: [
    {
      type: "folder",
      name: "Users",
      files: [
        {
            type: "folder",
            name: "Music",
            files: [
              { type: "file", name: "song1.mp3" },
              { type: "file", name: "song2.mp3" },
              { type: "file", name: "song3.mp3" }
            ]
        },
        {
          type: "folder",
          name: "Projects",
          files: [
            { type: "file", name: "project1.rb" },
            { type: "file", name: "project2.js" },
            {
              type: "folder",
              name: "project3",
              files: [
                { type: "file", name: "index.js" }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "folder",
      name: "Library",
      files: [
        { type: "file", name: "README.txt" }
      ]
    }
  ]
}

// Pseudocodigo
// Imprimir la propiedad name del objeto
// Si el objeto tiene la propiedad 'files'
//   imprimir el name
//   iterar por files

// 2. Si el resultado debe tener espacios antes
//    Agregar 4 espacios antes

function getFilesystem(filesystem) {
  // Casos Recursivo
  if (filesystem.name === 'root') {
    console.log(filesystem.name)
  }
  if (Object.keys(filesystem).includes('files')) {
    let spaces = 0
    filesystem.files.forEach(child => {
      const isFolder = child.type === 'folder'
      const isFile = child.type === 'file'
      if (isFolder) {
        spaces = 2
      } else if (isFile) {
        spaces = 4
      }
      console.log(`${' '.repeat(spaces)}${isFile ? '-' : ''}${child.name}`)
      return getFilesystem(child)
    })
  }
}

getFilesystem(filesystem)

// root
//   Users
//     Music
//       - song1.mp3
//       - song2.mp3
//       - song3.mp3
//     Projects
//       - project1.rb
//       - project2.js
//       project3
//         - index.js
//   Library
//     - README.txt