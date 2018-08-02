import Mock from 'mockjs'

export default {
    openMock: false,

    setMockState: function(openMock) {
        this.openMock = openMock;
    },

    setMockData: function(data) {
        if(!this.openMock || !(data instanceof Array)) {
            return ;
        }

        Mock.setup({
            timeout: 1000
        });

        for(var i=0;i<data.length;i++) {
            var item = data[i];
            Mock.mock(item.path, item.data);
        }
    },

}