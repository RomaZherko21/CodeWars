function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function () {
      return this.collection.length;
  };
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  };
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function (pageIndex) {
      let page = this.collection.slice(pageIndex*this.itemsPerPage,pageIndex*this.itemsPerPage + this.itemsPerPage).length
      return page>0?page:-1;
  };
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function (itemIndex) {
      if(!this.collection[itemIndex]) return -1;
      let index = Math.floor(itemIndex/this.itemsPerPage);
      return this.pageItemCount(index)!==-1 ? index :-1;
  };