var playlist = {kendrick: "good kid"}

function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name]
  return playlist
}
