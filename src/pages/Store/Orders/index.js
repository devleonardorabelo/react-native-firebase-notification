import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, View, Text } from 'react-native';
import apiReq from '../../../services/reqToken';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from '../../../global';
import Skeleton from '../../../components/Skeleton';
import { Header } from '../../../components/Header';
import { CardOrder, Card } from '../../../components/Item';

export default function Order() {

    const [ orders, setOrders ] = useState([]);
    const [ status, setStatus ] = useState('waiting');
    const [ total, setTotal ] = useState(0)
    const [ page, setPage ] = useState(1);
    const [ loading, setLoading ] = useState(false);

    const navigation = useNavigation();
    const { params } = useRoute();
    let route = params;

    async function loadOrders() {
        
        if(loading) return;

        if(total > 0 && orders.length == total) return;

        setLoading(true);

        const { data, headers } = await apiReq.get('orders', {
            params: { page, status },
        });

        if(data.length) {
            setOrders([...orders, ...data]);
            setTotal(headers['x-total-count']);
            setPage(page + 1);
        }

        setLoading(false);

    }

    function loadOrdersWithParams(selectStatus) {
        if(selectStatus != status && !loading) {
            setTotal(0);
            setOrders([]);
            setPage(1);
            setStatus(selectStatus);
        }
    }

    const navigateToOrder = order => navigation.navigate('StoreOrder', { order });

    useEffect(() => {
        loadOrders();

        if(route) {
            let index = orders.findIndex(( obj => obj._id === route.order._id ));
            if(index != -1 && route.method == 'destroy' || route.method == 'update') {
                orders.splice(index, 1);
                setOrders([...orders]);
                route = {};
                return;
            }
            if (index == -1 && route.method == 'create') {
                setOrders([...orders, route.order]);
                route = {};
                return;
            }
        }

    },[route, status])

    return (
        <SafeAreaView style={styles.container}>

            <Header title={'pedidos'}/>

            <View style={styles.row}>
                <TouchableOpacity
                    style={[
                        styles.buttonTag,
                        status == 'waiting' && { backgroundColor: '#639DFF' }
                    ]}
                    onPress={() => loadOrdersWithParams('waiting')}
                >
                    <Text style={[styles.textSemiBold, status == 'waiting' && { color: '#FFFFFF' } ]}>
                        Aguardando
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.buttonTag,
                        status == 'done' && { backgroundColor: '#639DFF' }
                    ]}
                    onPress={() => loadOrdersWithParams('done')}
                >
                    <Text style={[styles.textSemiBold, status == 'done' && { color: '#FFFFFF' } ]}>
                        Entregue
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.buttonTag,
                        status == 'lost' && { backgroundColor: '#639DFF' }
                    ]}
                    onPress={() => loadOrdersWithParams('lost')}
                >
                    <Text style={[styles.textSemiBold, status == 'lost' && { color: '#FFFFFF' } ]}>
                        Perdidos
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.column}
                data={orders}
                keyExtractor={order => String(order._id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadOrders}
                onEndReachedThreshold={0.3}
                numColumns={1}
                renderItem={({ item: order }) => (
                    
                    <CardOrder
                        action={() => navigateToOrder(order)}
                        title={`#${order.order_id}`}
                        subtitle={order.customer.name}
                        address={`${order.customer.address} ${order.customer.complement} ${order.customer.number}`}
                        time={order.time}
                        price={order.value}
                        status={[status, order.date, order.deliveredAt]}
                    />
                )}
                ListEmptyComponent={
                    loading &&
                        <Skeleton>
                            <Card style={{ backgroundColor: '#F5F5F5' }} />
                            <Card style={{ backgroundColor: '#F5F5F5' }} />
                            <Card style={{ backgroundColor: '#F5F5F5' }} />
                            <Card style={{ backgroundColor: '#F5F5F5' }} />
                            <Card style={{ backgroundColor: '#F5F5F5' }} />
                            <Card style={{ backgroundColor: '#F5F5F5' }} />
                            <Card style={{ backgroundColor: '#F5F5F5' }} />
                            <Card style={{ backgroundColor: '#F5F5F5' }} />
                            <Card style={{ backgroundColor: '#F5F5F5' }} />
                            <Card style={{ backgroundColor: '#F5F5F5' }} />
                        </Skeleton> 
                }
            />     


        </SafeAreaView>
    )
}