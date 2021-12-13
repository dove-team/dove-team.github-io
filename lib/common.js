window.onload = function () {
    /*谁TM乱改老子祝你去米国感染奥密克戎早上见上帝*/
    setTimeout(function () {
        var dailyInfo = [
            { value: '1931-9-18', descption: '年前，日本蓄意制造并发动的侵华战争。', severe: true },
            { value: '1936-7-7', descption: '年前，日本诡称士兵失踪借此发动卢沟桥事变。', severe: true },
            { value: '1937-12-13', descption: '年前，南京大屠杀惨案震惊中外，30万遇难同胞惨遭日军屠戮。', severe: true }
        ];
        function find(item) {
            return item.value.endsWith(dateStr);
        }
        var date = new Date();
        dateStr = (date.getMonth() + 1) + '-' + date.getDate();
        var result = dailyInfo.find(find);
        if (result != null) {
            if (result.severe) {
                document.body.setAttribute('style', '-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);'
                    + 'filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);_filter:none;');
            }
            var year = parseInt(result.value.split('-')[0]);
            popup((date.getFullYear() - year) + result.descption);
        }
    }, 10);
};
function popup(msg) {
    var panel = document.createElement('div');
    panel.setAttribute('class', 'popup alert alert-warning');
    var content = document.createElement('span');
    content.setAttribute('class', 'marquee');
    content.innerText = msg;
    panel.appendChild(content);
    document.body.appendChild(panel);
    var top = window.innerHeight - (panel.offsetHeight * 1.2);
    var left = (document.body.clientWidth - panel.clientWidth) / 2;
    panel.setAttribute('style', 'left:' + left + 'px;top:' + top + 'px;color:black');
}