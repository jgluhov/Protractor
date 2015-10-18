describe('Protractor homepage', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('should see title of Home page', function() {
    expect(browser.getTitle()).toEqual('Home');
  });

  describe('Home page postForm', function() {
    var postForm = element(by.name('postForm'));

    it('should see the form', function() {
      expect(postForm.isPresent()).toBe(true);
    });

    it('should have an input', function() {
      var label = postForm.element(by.css('label[for="title"]'));
      expect(label.isPresent()).toBe(true);
      expect(label.getText()).toBe('Title');

      var title = postForm.element(by.id('title'));
      expect(title.getAttribute('name')).toBe('title');
      expect(title.getAttribute('placeholder')).toBe('Title');
    });

    it('should have a textarea', function() {
      var label = postForm.element(by.css('label[for="content"]'));
      expect(label.isPresent()).toBe(true);
      expect(label.getText()).toBe('Content');

      var content = postForm.element(by.id('content'));
      expect(content.getAttribute('name')).toBe('content');
      expect(content.getAttribute('placeholder')).toBe('Content');
    });

    it('should have a button', function() {
      expect(postForm.element(by.tagName('button')).isPresent()).toBe(true);
    });

  });

});