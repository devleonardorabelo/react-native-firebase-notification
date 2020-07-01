import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    
    //STRUCTURE
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
    },
    header: {
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    store: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    storeAvatar: {
        backgroundColor: '#E2E2E2',
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    column: {
        flexDirection: 'column',
        paddingHorizontal: 16,
    },
    scrollHorizontal: {
        paddingLeft: 16,
    },
    alignCenterX: {
        justifyContent: 'center'
    },
    absoluteBottomRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
    absoluteBottomLeft: {
        position: 'absolute',
        left: 16,
        bottom: 16,
    },
    //NAVITEM
    action: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#DFDFDF',
        paddingVertical: 16
    },
    iconAction: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 16,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    arrowAction: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '12%',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    subtitleTextAction: {
        fontFamily: 'Montserrat Light',
        fontSize: 16,
        marginTop: -2,
        color: '#666666'
    },
    //BOX
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        padding: 4,
        marginBottom: 4,
        backgroundColor: '#F9F9F9',
        minHeight: 82,
    },
    boxImage: {
        width: '24%',
        height: '100%',
        borderRadius: 8,
    },
    boxBody: {
        flexDirection: 'column',
        padding: 16,
        flexGrow: 1,
    },
    alertBottom: {
        backgroundColor: '#FF4700',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        paddingVertical: 4,
        zIndex: 999,
    },
    //IMAGE
    fullImage: {
        width: '100%',
        height: 300,
        borderRadius: 8,
    },
    uploadImage: {
        width: '100%',
    },
    groupFloatButton: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 24
    },
    boxFloatButton: {
        position: 'absolute',
        justifyContent: 'center',
        width: '16%',
        height: '16%',
        alignItems: 'center'
    },
    //TEXTS AND TITLES
    title: {
        fontFamily: 'Montserrat Bold',
        fontSize: 32,
        lineHeight: 34,
        color: '#333333',
    },
    subtitle: {
        color: '#666666',
        fontSize: 18,
        fontFamily: 'Montserrat Medium'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Montserrat Medium',
        color: '#333333'
    },
    textSemiBold: {
        fontSize: 16,
        fontFamily: 'Montserrat SemiBold',
        color: '#333333'
    },
    textBold: {
        fontSize: 16,
        fontFamily: 'Montserrat Bold',
        color: '#333333'
    },
    textLight: {
        fontSize: 16,
        fontFamily: 'Montserrat Bold',
        color: '#333333'
    },
    textWrap: {
        flex: 1,
        flexWrap: 'wrap',
    },
    textHide: {
        height: 16,
        backgroundColor: '#E2E2E2',
        borderRadius: 8,
    },
    titleHide: {
        height: 16,
        flexGrow: 1,
        marginTop: 4,
        borderRadius: 8,
        backgroundColor: '#E2E2E2',
    }, 

    //BUTTONS
    button: {
        height: 48,
        borderRadius: 8,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    buttonTransparent: {
        height: 48,
        backgroundColor: 'transparent',
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonTag: {
        height: 40,
        minWidth: 120,
        borderRadius: 8,
        marginBottom: 16,
        marginRight: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#E2E2E2'
    },
    buttonFloat: {
        backgroundColor: '#FF4700',
        width: 64,
        height: 64,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionButton: {
        backgroundColor: '#FF4700',
        height: 64,
        width: 64,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //INPUTS
    groupInput: {
        marginBottom: 16,
    },
    labelInput: {
        flexDirection: 'row'
    },
    labelText: {
        marginLeft: 4,
        marginBottom: -10,
        zIndex: 999,
        paddingHorizontal: 8,
        backgroundColor: '#FFFFFF',
    },
    iconInput: {
        paddingHorizontal: 16,
        paddingTop: 16
    },
    textInput: {
        height: 50,
        fontSize: 16,   
        fontFamily: 'Montserrat Medium',
        flexGrow: 1,
        borderColor: '#E2E2E2',
        borderRadius: 8,
        borderWidth: 1,
        paddingLeft: 16,
        color: '#333333'
    },
    inputTextAlert: {
        fontFamily: 'Montserrat Light',
        fontSize: 16,
        color: '#E63B2E',
        paddingLeft: 2,
        paddingTop: 2,
    },
    textareaInput: {
        height: 80,
        textAlignVertical: 'top',
        borderColor: '#E2E2E2',
        borderRadius: 8,
        borderWidth: 1,
        padding: 16,
        fontSize: 16,  
        fontFamily: 'Montserrat Medium',
        color: '#333333'   
    },
    //MORE
    illustration: {
        marginVertical: 20,
        height: 180,
        width: 180,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    boxFluid: {
        paddingHorizontal: 16,
        paddingTop: 16,
        width: '100%',
    },
    map: {
        flex:1,
    },
    orderList: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#DFDFDF',
    },  
    orderCheckout: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        right: 0,
        left: 0,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    orderHeader:{
        width: '100%',
        backgroundColor: '#FF4700',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 128
    },
    orderDropButton: {
        height: 64,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deliveryInfo: {
        flexDirection: 'row',
        backgroundColor: '#FF4700',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    backgroundModal: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        maxWidth: '92%'
    },
    headerModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
    }

})