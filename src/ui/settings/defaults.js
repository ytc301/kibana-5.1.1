'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports['default'] = defaultSettingsProvider;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function defaultSettingsProvider() {
  var weekdays = _momentTimezone2['default'].weekdays().slice();

  var _weekdays = _slicedToArray(weekdays, 1);

  var defaultWeekday = _weekdays[0];

  // wrapped in provider so that a new instance is given to each app/test
  return {
    'buildNum': {
      readonly: true
    },
    'query:queryString:options': {
      value: '{ "analyze_wildcard": true }',
      description: 'lucene查询字符串解析器的<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html" target="_blank">选项</a>',
      type: 'json'
    },
    'sort:options': {
      value: '{ "unmapped_type": "boolean" }',
      description: 'Elasticsearch排序参数的<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-sort.html" target="_blank">选项</a>',
      type: 'json'
    },
    'dateFormat': {
      value: 'MMMM Do YYYY, HH:mm:ss.SSS',
      description: '显示漂亮格式的日期时，请使用此 <a href="http://momentjs.com/docs/#/displaying/format/" target="_blank">格式</a>'
    },
    'dateFormat:tz': {
      value: 'Browser',
      description: '应使用哪个时区。"Browser"将使用您的浏览器检测到的时区。 ',
      type: 'select',
      options: ['Browser'].concat(_toConsumableArray(_momentTimezone2['default'].tz.names()))
    },
    'dateFormat:scaled': {
      type: 'json',
      value: '[\n  ["", "HH:mm:ss.SSS"],\n  ["PT1S", "HH:mm:ss"],\n  ["PT1M", "HH:mm"],\n  ["PT1H", "YYYY-MM-DD HH:mm"],\n  ["P1DT", "YYYY-MM-DD"],\n  ["P1YT", "YYYY"]\n]',
      description: '定义在基于时间的数据按顺序呈现的情况下使用的格式的值，格式化的时间戳应该适应测量之间的间隔。 Keys are ' + ' <a href="http://en.wikipedia.org/wiki/ISO_8601#Time_intervals" target="_blank">' + 'ISO8601 intervals.</a>'
    },
    'dateFormat:dow': {
      value: defaultWeekday,
      description: '每周周几开始？',
      type: 'select',
      options: weekdays
    },
    'defaultIndex': {
      value: null,
      description: '如果未设置索引，则访问的索引'
    },
    'defaultColumns': {
      value: ['_source'],
      description: '默认情况下在“数据分析”页面中显示的列'
    },
    'metaFields': {
      value: ['_source', '_id', '_type', '_index', '_score'],
      description: '存在于_source之外的字段在显示时合并到我们的文档中'
    },
    'discover:sampleSize': {
      value: 500,
      description: '要在表中显示的行数'
    },
    'doc_table:highlight': {
      value: true,
      description: '突出显示某些搜索结果' + '突出显示使处理大文档时请求缓慢。'
    },
    'courier:maxSegmentCount': {
      value: 30,
      description: '数据分析页面的请求被分成段，以防止大量请求发送到elasticsearch。 此设置会尝试防止段列表过长，这可能会导致请求处理时间过长'
    },
    'courier:ignoreFilterIfFieldNotInIndex': {
      value: false,
      description: '此配置增强了对包含访问不同索引的可视化的仪表板的支持。 设置为false时，所有过滤器都应用于所有可视化。 设置为true时，当可视化对象的索引不包含过滤字段时，将忽略可视化对象的过滤器。'
    },
    'fields:popularLimit': {
      value: 10,
      description: '要显示的前N个最受欢迎的字段'
    },
    'histogram:barTarget': {
      value: 50,
      description: '在日期直方图中使用“自动”间隔时，尝试生成多少条'
    },
    'histogram:maxBars': {
      value: 100,
      description: '在日期直方图中不显示多个条形，如果需要，可以缩放比例值'
    },
    'visualization:tileMap:maxPrecision': {
      value: 7,
      description: '在地图上显示的最大geoHash精度：7是高，10是非常高，12是最大。' + '<a href="http://www.elastic.co/guide/en/elasticsearch/reference/current/' + 'search-aggregations-bucket-geohashgrid-aggregation.html#_cell_dimensions_at_the_equator" target="_blank">' + '单元尺寸说明</a>'
    },
    'visualization:tileMap:WMSdefaults': {
      value: JSON.stringify({
        enabled: false,
        url: 'https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer',
        options: {
          version: '1.3.0',
          layers: '0',
          format: 'image/png',
          transparent: true,
          attribution: 'Maps provided by USGS',
          styles: ''
        }
      }, null, 2),
      type: 'json',
      description: '地图图表中WMS地图服务器支持的默认<a href="http://leafletjs.com/reference.html#tilelayer-wms" target="_blank">属性</a>'
    },
    'visualization:colorMapping': {
      type: 'json',
      value: JSON.stringify({
        Count: '#6eadc1'
      }),
      description: '将值映射到可视化内的指定颜色'
    },
    'visualization:loadingDelay': {
      value: '2s',
      description: '在查询期间调暗可视化之前等待的时间'
    },
    'visualization:dimmingOpacity': {
      type: 'number',
      value: 0.5,
      description: '突出显示图表的其他元素时，图表项目的不透明度变暗。 该数字越低，突出显示的元素就越突出。这必须是介于0和1之间的数字。'
    },
    'csv:separator': {
      value: ',',
      description: '使用此字符串分隔导出的值'
    },
    'csv:quoteValues': {
      value: true,
      description: '应该在csv导出中引用值吗？'
    },
    'history:limit': {
      value: 10,
      description: '在有历史记录的字段（例如，查询输入）中，显示多少最近的值'
    },
    'shortDots:enable': {
      value: false,
      description: '缩短长字段，例如，用f.b.baz代替foo.bar.baz'
    },
    'truncate:maxHeight': {
      value: 115,
      description: '表格中单元格应占用的最大高度。 设置为0以禁用截断'
    },
    'indexPattern:fieldMapping:lookBack': {
      value: 5,
      description: '对于在其名称中包含时间戳的索引模式，查找多少最近匹配模式，以从中查询字段映射'
    },
    'format:defaultTypeMap': {
      type: 'json',
      value: '{\n  "ip": { "id": "ip", "params": {} },\n  "date": { "id": "date", "params": {} },\n  "number": { "id": "number", "params": {} },\n  "boolean": { "id": "boolean", "params": {} },\n  "_source": { "id": "_source", "params": {} },\n  "_default_": { "id": "string", "params": {} }\n}',
      description: '默认为每个字段类型使用的格式名称的映射。 如果未明确提及字段类型，则使用“_default_”'
    },
    'format:number:defaultPattern': {
      type: 'string',
      value: '0,0.[000]',
      description: '默认的 <a href="http://numeraljs.com/" target="_blank">数字格式</a> '
    },
    'format:bytes:defaultPattern': {
      type: 'string',
      value: '0,0.[000]b',
      description: '默认的 <a href="http://numeraljs.com/" target="_blank">字节格式</a> '
    },
    'format:percent:defaultPattern': {
      type: 'string',
      value: '0,0.[000]%',
      description: '默认的 <a href="http://numeraljs.com/" target="_blank">百分比格式</a>'
    },
    'format:currency:defaultPattern': {
      type: 'string',
      value: '($0,0.[00])',
      description: '默认的 <a href="http://numeraljs.com/" target="_blank">货币格式</a>'
    },
    'savedObjects:perPage': {
      type: 'number',
      value: 5,
      description: '在加载对话框中每页显示的对象数'
    },
    'timepicker:timeDefaults': {
      type: 'json',
      value: '{\n  "from": "now-15m",\n  "to": "now",\n  "mode": "quick"\n}',
      description: '当Kibana启动时使用的时间过滤区间'
    },
    'timepicker:refreshIntervalDefaults': {
      type: 'json',
      value: '{\n  "display": "Off",\n  "pause": false,\n  "value": 0\n}',
      description: '时间过滤区间的默认刷新间隔'
    },
    'dashboard:defaultDarkTheme': {
      value: false,
      description: '默认情况下，新仪表板使用深色主题'
    },
    'filters:pinnedByDefault': {
      value: false,
      description: '默认情况下，过滤器是否应具有全局状态（被固定）'
    },
    'notifications:banner': {
      type: 'markdown',
      description: '用于向所有用户发出临时通知的自定义横幅 <a href="https://help.github.com/articles/basic-writing-and-formatting-syntax/" target="_blank">Markdown supported</a>.',
      value: ''
    },
    'notifications:lifetime:banner': {
      value: 3000000,
      description: '屏幕上显示banner的时间（以毫秒为单位）。 设置为Infinity将禁用。'
    },
    'notifications:lifetime:error': {
      value: 300000,
      description: '屏幕上显示错误通知的时间（以毫秒为单位）。 设置为Infinity将禁用。'
    },
    'notifications:lifetime:warning': {
      value: 10000,
      description: '屏幕上显示警告通知的时间（以毫秒为单位）。 设置为Infinity将禁用。'
    },
    'notifications:lifetime:info': {
      value: 5000,
      description: '屏幕上显示一般通知的时间（以毫秒为单位）。 设置为Infinity将禁用。'
    },
    // Timelion stuff
    'timelion:showTutorial': {
      value: false,
      description: '在进入timelion应用程序时，我应该默认显示教程吗？'
    },
    'timelion:es.timefield': {
      value: '@timestamp',
      description: '使用.es（）时包含时间戳记的默认字段'
    },
    'timelion:es.default_index': {
      value: '_all',
      description: '使用.es（）搜索的默认elasticsearch搜索索引'
    },
    'timelion:target_buckets': {
      value: 200,
      description: '使用自动间隔时要获取的存储桶聚合数'
    },
    'timelion:max_buckets': {
      value: 2000,
      description: '单个数据源可以返回的最大数量的桶聚合'
    },
    'timelion:default_columns': {
      value: 2,
      description: '默认情况下，在 timelion表上的列数'
    },
    'timelion:default_rows': {
      value: 2,
      description: '默认情况下，在 timelion表上的行数'
    },
    'timelion:graphite.url': {
      value: 'https://www.hostedgraphite.com/UID/ACCESS_KEY/graphite',
      description: '<em>[experimental]</em> The URL of your graphite host'
    },
    'timelion:quandl.key': {
      value: 'someKeyHere',
      description: '<em>[experimental]</em> Your API key from www.quandl.com'
    },
    'state:storeInSessionStorage': {
      value: false,
      description: '网址有时可能会变得太大，某些浏览器无法处理。 为了反击，我们正在测试在会话存储中存储URL的部分是否有帮助。 请让我们知道它怎么回事！'
    }
  };
}

;
module.exports = exports['default'];
