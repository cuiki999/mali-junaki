let textFilters = {

  filters: {
   trimToMaxLength: function (text, maxChar = 100) {
      return text.substring(0, maxChar) + '...';
    }
  }
}

export default textFilters;