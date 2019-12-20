const process_type = (val) => {
  let url = val.NODE_ENV,obj = {};
  try {
    switch (url) {
      case 'dev':
        obj.ruby_axiosUrl = 'https://apvs.tougubang.net';
        obj.ruby_axiosUrl1 = 'http://apis.tougubang.net';
        obj.php_url = 'http://appletest.tougub.com';
        obj.php_axiosUrl = '';
        obj.java_axiosUrl = 'https://testmt.tougub.com';
        break;
      case 'development':
        obj.ruby_axiosUrl = 'https://apvs.tougubang.net';
        obj.php_url = 'http://appletest.tougub.com';
        obj.ruby_axiosUrl1 = 'http://apis.tougubang.net';
        obj.php_axiosUrl = 'http://jztest.jfinfo.com';
        obj.java_axiosUrl = 'https://testmt.tougub.com';
        break;
      case 'production':
        obj.ruby_axiosUrl = 'https://apvs.tougub.com';
        obj.php_url = 'http://applet.tougub.com';
        obj.ruby_axiosUrl1 = 'http://apis.tougub.com';
        obj.php_axiosUrl = 'http://jz.jfinfo.com';
        obj.java_axiosUrl = 'https://mt.tougub.com';
        break;
      default:
        obj.ruby_axiosUrl = 'https://apvs.tougubang.net';
        obj.php_url = 'http://appletest.tougub.com';
        obj.php_axiosUrl = 'http://jztest.jfinfo.com';
        obj.ruby_axiosUrl1 = 'http://apis.tougubang.net';
        obj.java_axiosUrl = 'https://testmt.tougub.com';
    }
  } catch (e) {
    obj.ruby_axiosUrl = 'http://apvs.tougubang.net';
    obj.php_url = 'http://appletest.tougub.com';
    obj.ruby_axiosUrl1 = 'http://apis.tougubang.net';
    obj.php_axiosUrl = 'http://jztest.jfinfo.com';
    obj.java_axiosUrl = 'https://testmt.tougub.com';
  }
  return obj;
}

export default process_type
