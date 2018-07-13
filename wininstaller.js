/* https://www.christianengvall.se/electron-windows-installer/ */

const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'dist')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'educablocks-offline-win32-ia32/'),
    authors: 'Educabot',
    arch: 'ia32',
    noMsi: false,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'educablocks-offline.exe',
    setupExe: 'EducablocksInstaller.exe',
    setupIcon: path.join(rootPath, 'views', 'logo.ico'),
    loadingGif: path.join(rootPath, 'views', 'installer.gif')
  })
}
