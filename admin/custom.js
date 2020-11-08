CMS.registerEditorComponent({
    id: "youtube",
    label: "Youtube",
    fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
    pattern: /^youtube (\S+)$/,

    fromBlock: function(match) {
        return {
            id: match[1]
        };
    },

    toBlock: function(obj) {
        return '<div class="video-container"> \
<iframe src="https://www.youtube.com/embed/' + obj.id + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> \
</div>'
    }
});

CMS.registerEditorComponent({
    id: "h1",
    label: "Heading",
    fields: [{name: 'text', label: 'Heading', widget: 'string'}],

    fromBlock: function(match) {
        return {
            text: match[1]
        }
    },

    toBlock: function(obj) {
        return '<h1 class="cyan-text">' + obj.text + '</h1>'
    }
});

CMS.registerEditorComponent({
    id: "h2",
    label: "Sub Heading",
    fields: [{name: 'text', label: 'Sub Heading', widget: 'string'}],

    fromBlock: function(match) {
        return {
            text: match[1]
        }
    },

    toBlock: function(obj) {
        return '<h2 class="cyan-text">' + obj.text + '</h2>'
    }
});

CMS.registerEditorComponent({
    id: "content",
    label: "Content",
    fields: [{name: 'text', label: 'Content', widget: 'string'}],

    fromBlock: function(match) {
        return {
            text: match[1]
        }
    },

    toBlock: function(obj) {
        return '<div class="content white-text"><p>' + obj.text + '</p></div>'
    }
});

CMS.registerEditorComponent({
    id: "img",
    label: "Image URL",
    fields: [{name: 'text', label: 'Image URL', widget: 'string'}],

    fromBlock: function(match) {
        return {
            text: match[1]
        }
    },

    toBlock: function(obj) {
        return '<div class="center-img"> \
    <img class="responsive-img post-img" src="' + obj.text + '"> \
</div>'
    }
});

CMS.registerEditorComponent({
    id: "cblk",
    label: "Code Block",
    fields: [{name: 'text', label: 'Code Block', widget: 'text'}],

    fromBlock: function(match) {
        return {
            text: match[1]
        }
    },

    toBlock: function(obj) {
        return '<pre><code>' + obj.text + '</code></pre>'
    }
});
