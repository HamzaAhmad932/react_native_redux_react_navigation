import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Linking} from 'react-native';
import Card from '../Card/Card';
import CardSection from '../CardSection/CardSection';
import Button from '../Button/Button';

class AlbumList extends Component{
	constructor(props){
		super(props);
		this.state ={
			albums: []
		};
		this.openUrlMethod = this.openUrlMethod.bind(this);
	}
	componentDidMount(){
		fetch('https://rallycoding.herokuapp.com/api/music_albums', {
			method: 'GET'
			// body: JSON.Stringify(),
			// headers: {}
		})
		.then((resp=>resp.json()))
		.then((resp)=>{ this.setState({albums : resp}) })
		.catch((err)=>{ console.log(err);});
	}
	openUrlMethod = (uri)=>{
		Linking.openURL(uri);
	}
	render(){
		// console.log(this.state);
		const {openUrlMethod} = this;
		
		return (
			<ScrollView>
				{
				this.state.albums.map((album, i)=>{
					return (
						<View key={i}>
							<Card>
								<CardSection>
									<View style={styles.thumbnailContainer}>
										<Image
											style = {styles.thumbnailStyle}
											source = {{ uri: album.thumbnail_image}}
										/>
									</View>
									<View style={styles.titleContainer}>
										<Text style={styles.titleStyle}>{album.title}</Text>
										<Text>{album.artist}</Text>
									</View>
								</CardSection>

								<CardSection>
									<Image
										style = {styles.imageStyle}
										source = {{uri : album.image}} 
										/>
								</CardSection>

								<CardSection>
									<Button onPress={()=>{ Linking.openURL(album.url) }}>Buy Now!</Button>
								</CardSection>
							</Card>
						</View>
						)
				})
				}
			</ScrollView>
			);
	}
}
const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
		borderRadius: 2,
	},
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	titleStyle: {
		fontSize: 18
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null,
	}
});
export default AlbumList;