import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "feature"] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              type-> {
                name
              }
            },
        }[0]
      
    `,
      )
      .then((data) => {
        setRestaurants(data?.restaurants)
      })
  }, [id])

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-xl" style={{ color: '#7D5A50' }}>
          {title}
        </Text>
        <ArrowRightIcon color="#7D5A50" />
      </View>

      <Text className="text-md px-4 font-medium" style={{ color: '#7D5A50' }}>
        {description}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* {RestaurantCard} */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
