function post() {
  $.post(
    'https://sheetdb.io/api/v1/lx7dbw4n7kxa5',
    {
      STATUS: 'insert',
      ID: $(INPUT_ID).val(),
      NAME: $(INPUT_NAME).val(),
      PATH: $(INPUT_PATH).val(),
      MNT_DT: $(DT_NOW).text(),
    },
    function (data, status) {
      alert(data + '\nStatus: ' + status);
    }
  );
}

function update() {
  $.post(
    'https://sheetdb.io/api/v1/lx7dbw4n7kxa5',
    {
      STATUS: 'update',
      whereID: $(INPUT_whereID).val(),
      ID: $(INPUT_ID).val(),
      NAME: $(INPUT_NAME).val(),
      PATH: $(INPUT_PATH).val(),
      MNT_DT: $(DT_NOW).text(),
    },
    function (data, status) {
      alert(data + '\nStatus: ' + status);
    }
  );
}

function GET() {
  $.ajax({
    type: 'GET',
    url: 'https://sheetdb.io/api/v1/lx7dbw4n7kxa5',
    success: function (data) {
      var res = data;
      $(TEST).html(res);
      $(REXML).text(res);
    },
    dataType: 'html',
  });
}

function SQL_GET() {
  let stringSQL = $('#T_SQL').val();
  let strSQL = 'https://sheetdb.io/api/v1/lx7dbw4n7kxa5';
  $.ajax({
    type: 'GET',
    url: strSQL,
    success: function (data) {
      var res = data;
      $(TEST).html(res);
      $(REXML).text(res);
    },
    dataType: 'html',
  });
}

function 字串取代(被替換的字串, 要替換的字串, 原字串) {
  let 換好的字串 = '';
  換好的字串 = 原字串.replace(new RegExp(被替換的字串, 'g'), 要替換的字串);
  return 換好的字串;
}

String.prototype.hashCode = function () {
  var hash = 0,
    i,
    chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function TIME() {
  let TIME = moment().format('YYYY-MM-DD HH:mm:ss');
  $(DT_NOW).text(TIME);
  setTimeout('TIME()', 500);
}
