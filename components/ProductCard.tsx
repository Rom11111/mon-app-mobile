import {Button, CardProps,Card, H2, Paragraph, Image, XStack} from "tamagui";

export function ProductCard(props: CardProps & {product: Product}) {
  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>{props.product.name}</H2>
        <Paragraph theme="alt2">{props.product.price}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10">Voir détails</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          objectFit="contain"
          alignSelf="center"
          source={{
            width: 300,
            height: 300,
            uri: process.env.EXPO_PUBLIC_SERVER_STATIC_URL +
              props.product.image_name,
          }}
        />
      </Card.Background>
    </Card>
  )
}