function areYouPlayingBanjo(name) {
    if (name && (name[0].toLowerCase() === 'r')) {
          return name + " plays banjo";
      } else {
          return name + " does not play banjo";
      }
  }