class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      let regexp = /\d{0,3}[a-z][a-z0-9_-]*(\.[a-z0-9]+){1}/i
    return dirtyFileName.match(regexp)[0] || [];
    }
  }