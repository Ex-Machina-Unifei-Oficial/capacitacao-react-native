# React Native

## Introdução

React Native é uma ferramenta, baseada em JS e React, para desenvolvimento de aplicativos mobile criada pelo Facebook. O nome "Native" é devido sua principal proposta: permitir que desenvolvedores criem aplicativos com aspectos _nativos_ para Android e iOS. Ou seja, os componentes declarados no código são transformados nos elementos próprios das plataformas, permitindo que tenham aparência e comportamento idênticos aos aplicativos próprios do Android ou iOS, além de um desempenho semelhante.

O exemplo mais básico disso, é com a própria View, que é o componente mais básico para a criação das interfaces em dispositivos mobile. No sistema iOS é traduzida para uma IView; no Android, em uma android.view; e por fim na Web, em uma div.

Sim, na web. O React Native possui o slogan "Learn once, write anywhere" (Aprenda uma vez, escreva em qualquer lugar), dessa forma um dos seus principais propósitos é atender a maior parte de sistemas disponíveis, entre eles a própria web (embora seja muito mais comum e robusto aplicativos com frameworks baseados no próprio React). Outros sistemas compatíveis com React Native incluem Windows, Mac, Google Chrome, Mozila Firefox e até algumas TVs. A grande vantagem é que não é preciso ter um código para cada plataforma e muito menos linguagens diferentes: aplicativos nativos Android utilizam Java e iOS swift, por exemplo. As traduções dos componentes são feitas automaticamente pelo React (No entanto, alguns casos exigem tratamentos diferentes, que também podem ser resolvivos pelo código).

Por fim, assim como será comentado diversas vezes durante o material, o React Native possui uma comunidade ampla e um ecossistema com diversas bibliotecas e ferramentas, que podem ser facilmente integradas para adicionar funcionalidades aos aplicativos.

### Funcionamento

React Native utiliza a mesma sintaxe de componentes e estado do React, mas em vez de renderizar no DOM (Document Object Model) do navegador, ele renderiza componentes nativos usando uma ponte JavaScript para interagir com a API nativa de cada plataforma.

Exemplo básico de um componente em React Native:

```jsx
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default App;
```

Todo o processo de bundling ("compilação") do projeto React Native para uma versão amplamente compátivel do JavaScript (ES5) e então a conversão em cada plataforma para os elementos correspondentes para gerar o aplicativo é bem complexa. Então não é algo essencial de saber logo no início. Porém, em algum momento pode ser interessante aprender um pouco mais a respeito das ferramentas Babel e Metro, responsáveis por esse processo, ou pelo menos saber como adicionar funcionalidades neles. Por exemplo, o Nativewind (Tailwind para React Native) utiliza um plugin do Babel para adicionar as estilizações de uma maneira mais fácil para o desenvolvedor.

### Algumas desvantagens

Apesar do intuito de possibilitar a utilização do mesmo código para diversas plataformas, para trabalhar com funcionalidades muito específicas de determinado sistema, pode ser necessário escrever código nativo, aumentando a complexidade do projeto. Além disso, jogos ou aplicativos que exigem gráficos complexos ou performance muito eficiente podem ser melhor otimizados desenvolvendo um aplicativo nativo puro, não sendo tão recomendado o React Native.

## Expo

Assim como o React, após um tempo da criação do React Native, surgiram frameworks que otimizam o desenvolvimento de projetos com a plataforma. No caso, o mais comumente utilizado é o Expo, sugerido até mesmo na sua documentação oficial.

Expo é um framework para construção de aplicativos React Native com ferramentas integradas, facilitando muito o desenvolvimento rápido e as configurações iniciais do projeto. Com React Native puro era necessário realizar diversas configurações antes de iniciar o desenvolvimento propriamente dito, mesmo com a ferramenta semelhante ao `create-react-app`. O expo realiza todas essas configurações básicas, além de possuir um aplicativo para facilitar os testes em ambiente de desenvolvimento.

Caso queira se aventurar a criar um projeto sem o Expo, siga o [Tutorial disponível na Documentação](https://reactnative.dev/docs/set-up-your-environment).

Além da facilidade para configurar o projeto, o Expo adiciona outras diversas funcionalidades, até mesmo fora do desenvolvimento em si (com o Deploy, por exemplo). Por conta disso e seguindo a própria recomendação da Documentação do React Native, para essa capacitação, os assuntos tratados serão utilizando o Expo. OBS: Nem tudo que for explicado depende do Expo, mas é bom deixar claro que foi tudo testado com uma aplicação que utiliza Expo.

### Instalação e Criação de um Novo Projeto

Importante: Para a utilização do React Native e do Expo, também é necessário que o Node esteja instalado.

Instalação do Expo CLI:

```bash
npm install -g expo-cli
```

Criação de um Novo Projeto:

```bash
npx create-expo-app@latest
```

Simples assim, você terá um projeto pronto para desenvolver. Porém, alguns detalhes a mais devem ser explicados:

Primeiramente, assim como com o CRA, é possível passar alguns parâmetros a mais para a criação do projeto, como:

- `--template default`: Opção padrão, inclui expo router e TypeScript, além de alguns componentes pré-prontos.
- `--template blank`: Instala o mínimo necessário para a aplicação, utilizando JavaScript.
- `--template blank-typescript`: O mínimo necessário, porém com TypeScript.

Para mais opções, consulte a Documentação.

No momento da criação dessa capacitação, a opção padrão cria vários exemplos básicos para auxiliar no aprendizado. No entanto, para manter a simplicidade do material, esses exemplos não ficaram disponíveis nesse repositório. Nesse caso, é possível excluí-los através de um comando que também vem adicionado, para isso, rode:

```bash
npm run reset-project
```

Ao fazer isso, será criada uma nova raiz para o projeto (outra pasta app), com um exemplo mais simples, possibilitando excluir as outras pastas (app-example: a antiga pasta app; components; constants; hooks e scripts: lembre-se de remover o comando na seção de scripts dentro do package.json também). A vantagem de fazer isso é obter um projeto com navegação pré-configurada, mas sem muitas poluições. Alternativamente também é possível utilizar outros templates, como mencionado acima.

Agora, com o projeto criado, precisamos saber como executá-lo:

### Utilizando o Celular

A opção mais simples é utilizar o próprio celular. Para isso, existem dois modos:

#### Expo Go

O primeiro e mais recomendado é instalar o aplicativo **Expo Go** diretamente da App Store ou Play Store. Esse aplicativo permite que o desenvolvedor tenha acesso ao ambiente de desenvolvimento do projeto sem precisar instalá-lo no próprio celular. Rode o comando:

```bash
npx expo start
```

Então, espere um pouco, abra o aplicativo e escaneie o QR Code que aparecerá no terminal (caso não veja, suba um pouco a tela). Então será feito o bundling do seu projeto e ele será carregado.

Alguns atalhos aparecem logo abaixo do QR Code como `r` para recarregar ou `m` para habilitar ou desabilitar o menu (basta digitar as letras no terminal mesmo). Chacoalhar o celular também fará aparecer o menu, onde também é possível recarregar o projeto. Note que após o bundling, próximo ao QR Code, aparecerá que o projeto está rodando em `https://localhost:8081` (ou algum IP no lugar de localhost), esta é a magia que faz o aplicativo funcionar: ele é hospedado na rede. Então certifique-se que o celular e o computador estejam conectados na mesma rede (para que o celular tenha acesso ao localhost do computador). Como curiosidade, já que o React Native tem suporte para Web, também é possível abrir o localhost no próprio navegador e ver como o aplicativo se comporta. Obs: No momento da criação desse material, o Expo não possui um tratamento muito bom para quando o celular e o computador estão conectados em redes diferentes, aparece somente uma mensagem "Something went wrong", mas, na maioria das vezes, o problema é justamente esse.

Teoricamente o React Native e o Expo possuem Hot Reload, o que permite que o aplicativo recarregue e atualize automaticamente após alguma alteração no código, semelhante ao React. No entanto, por conta do ambiente mais sensível, às vezes é necessário recarregar manualmente o aplicativo (comando `r` ou opção de "Reload" no menu), principalmente ao alterar rotas. Em casos mais extremos, com utilização de recursos nativos ou alterações na configuração do projeto, por exemplo, é preciso encerrá-lo e realizar o bundling novamente. Obs: a primeira vez é sempre mais demorada, a partir da segunda, algumas informações são cacheadas para acelerar o processo. Contudo, como nem tudo são flores no mundo da programação, isso também pode causar problemas. Então, caso alguma alteração nas configurações pareça não estar sendo efetivada, utilize o comando `npx expo start --clear`, para excluir os dados em cachê antes de rodar o projeto.

#### Conexão USB

Utilizar o Expo Go é muito útil para realizar testes de conceito e aprender a mexer no ambiente, contudo possui algumas limitações com relação ao acesso de recursos nativos do celular, justamente por passar por essa ponte na rede. Então, para "desbloquear" esses recursos, rode o comando:

```bash
npx expo prebuild
```

Ele irá criar as pastas `ios` e `android` na raiz do projeto, o que irá permitir a manipulação de pacotes específicos de cada ambiente (o Expo tem ferramentas para gerenciar isso também).

Agora é preciso utilizar a segunda maneira de executar o projeto. Para isso, habilite o modo de desenvolvedor no celular. O passo a passo varia de acordo com cada celular.

Para sistemas Android, no geral, é preciso apertar diversas vezes na versão do Android, então aparecerá a mensagem "Você agora é um desenvolvedor", ou algo semelhante. Pesquise por "Configurações de desenvolvedor" e habilite a opção "depuração por USB".

OBS: Assim como em outras partes de configuração de ambiente ou especifidades de cada sistema, durante essa capacitação o foco maior é para Android. Devido ao fato de algumas opções para iOS necessitarem um Mac e eu não ter um iPhone para confirmar a utilização. Porém, caso utilize um iPhone e alguma coisa não dê certo, entre em contato que a gente tenta resolver.

Então, conecte o celular no computador e execute:

```bash
npx expo run:android
npx expo run:ios
```

Agora é preciso dar permissão, através de uma caixa de diálogo no celular, para que o aplicativo seja instalado de fato. O projeto aparecerá com um ícone no Expo e o nome dado ao projeto.

IMPORTANTE: Renomear o projeto é bem trabalhoso, pois o nome é espalhado em diversos arquivos de configuração, então evite ao máximo.

IMPORTANTE: Desinstalar o aplicativo baixado para o ambiente de desenvolvimento também pode gerar bugs, pois podem ficar resquícios da instalação, que fazem com que o aplicativo não possa ser instalado novamente, então evite ao máximo também (Porém, caso já tenha feito e esteja com problemas, consulte a seção de Deploy ao final da capacitação).

### Utilizando o Simulador

Como essa etapa depende de softwares externos para a execução, sujeitos a diversas mudanças de configuração, é recomendado que sempre sigam a [Documentação do Expo](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated&mode=development-build) para conferirem como configurar devidamente o ambiente. Porém, vale notar que os softwares mais utilizados até então são Android Studio, para android, e Xcode, para iOS (no entanto é necessário um Mac para baixá-lo, legalmente).

## Componentes

Agora, com o ambiente devidamente configurado e pronto para o desenvolvimento propriamente dito, é necessário esclarecer quais aspectos do React Native se alteram em relação ao React e quais aspectos se mantêm.

A parte inicial de componentes pode ser aplicada da mesma forma, sendo elas: Composição de componentes (utilização do jsx, children, utilização do map, etc), Props e Integração com TypeScript, além dos Hooks do React.

O que vai de fato mudar nessa parte inicial são as tags em si (não são utilizadas mais as tags do HTML), que serão tratadas nessa seção, e a estilização, com algumas pequenas mudanças, que serão tratadas na seção seguinte.

### Componentes Básicos

#### **View**

Assim como dito anteriormente, é o componente básico para a criação das interfaces, cria um espaço para trabalhar. Porém, diferentemente da div do HTML, já possui o flexbox habilitado por padrão. Lembre-se também que agora o eixo principal é o eixo vertical (por conta da proporção da maior parte dos dispositivos móveis).

```jsx
import { View, Text } from "react-native";

export const ViewExample = () => {
  return (
    <View
      style={{
        alignItems: "center",
        padding: 20,
        rowGap: 10,
      }}
    >
      <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
      <View style={{ backgroundColor: "lightgreen", height: 50, width: 50 }} />
    </View>
  );
};
```

Além da View padrão, existem outros componentes que seguem o mesmo princípio, porém com algumas funcionalidades a mais, sendo eles:

- **ScrollView**: Possibilita que o usuário role a tela no sentido vertical ou horizontal (um por vez). Necessário definir o tamanho para funcionar corretamente. Os componentes filhos são todos carregados de uma vez ao renderizar. É possível adicionar a funcionalidade de puxar a tela pra recarregar a lista através do componente RefreshControl.

```jsx
import { View, Text, ScrollView } from "react-native";

export const ScrollViewExample = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <ScrollView
        style={{
          flexGrow: 0.5,
          margin: 20,
        }}
        contentContainerStyle={{
          borderColor: "lightblue",
          borderWidth: 5,
          alignItems: "center",
          backgroundColor: "aliceblue",
          rowGap: 10,
        }}
      >
        <Text>Essa parte é rolável</Text>
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          padding: 20,
          rowGap: 10,
        }}
      >
        <Text>Essa parte não é mais</Text>
        <View
          style={{ backgroundColor: "lightgreen", height: 50, width: 50 }}
        />
        <View
          style={{ backgroundColor: "lightgreen", height: 50, width: 50 }}
        />
      </View>
    </View>
  );
};
```

- **KeyboardAvoidingView**: Automaticamente ajusta sua altura para que o conteúdo continue visível quando o teclado for acionado. Muito útil para inputs e formulários, porém evite colocar muitas children e unidades de tamanho fixo para evitar bugs.

```jsx
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";

export const KeyboardAvoidingViewExample = () => {
  return (
    <KeyboardAvoidingView
      style={{
        flexGrow: 1,
        margin: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "lightblue",
          flexGrow: 1,
          marginVertical: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Alguma coisa espaçosa</Text>
      </View>
      <TextInput style={{ borderWidth: 1 }} placeholder="Input de Texto" />
    </KeyboardAvoidingView>
  );
};
```

#### **Text**

Componente **necessário** para renderizar textos. Possui suporte a aninhamento e ao evento de pressionar (onPress).

```jsx
import { View, Text } from "react-native";

export const TextExample = () => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", flexGrow: 1 }}
    >
      <Text style={{ fontSize: 24, fontWeight: 700, color: "orange" }}>
        O bom e velho{" "}
        <Text
          style={{ color: "darkblue" }}
          onPress={() => alert("é um hello world mesmo")}
        >
          Hello, World!
        </Text>
      </Text>
    </View>
  );
};
```

#### **Image**

Utilizado para renderizar uma imagem com possíveis estilizações.

```jsx
import { View, Image } from "react-native";

export const ImageExample = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: "#333",
        flexGrow: 1,
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={require("@/assets/images/Ex_logo.png")} // busca uma imagem local
        alt="ex machina logo"
      />
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png", // busca uma imagem na web
        }}
        alt="react native logo"
      />
    </View>
  );
};
```

- **ImageBackground**: Variação para possibilitar que as children passadas sejam renderizadas por cima da imagem. Lembre-se que é necessário especificar as dimensões da imagem para que funcione corretamente.

```jsx
import { View, Text, ImageBackground } from "react-native";

export const ImageBackgroundExample = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: "#333",
        flexGrow: 1,
      }}
    >
      <ImageBackground
        imageStyle={{ opacity: 0.5 }}
        style={{
          width: 300,
          height: 300,
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("@/assets/images/Ex_logo.png")} // busca uma imagem local
        alt="ex machina logo"
      >
        <Text style={{ color: "#def" }}>
          Conteúdo dentro da imagem :D
          {"\n\n"}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quasi
          aliquam enim dolores odio perspiciatis voluptate nulla? Saepe
          doloribus, numquam nesciunt voluptas voluptates ipsum libero quaerat,
          repellat vitae in impedit!
          {"\n\n"}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quasi
          aliquam enim dolores odio perspiciatis voluptate nulla? Saepe
          doloribus, numquam nesciunt voluptas voluptates ipsum libero quaerat,
          repellat vitae in impedit!
        </Text>
      </ImageBackground>
    </View>
  );
};
```

#### **TextInput**

Semelhante a tag input do HTML, possibilita algum tipo de input do usuário e automaticamente habilita o teclado. Possui diversas props para customização, no entanto não é possível transformar em checkbox, switch, etc.

```jsx
import { useState } from "react";
import { TextInput, View } from "react-native";

export const TextInputExample = () => {
  const [text, setText] = useState("Texto inicial");
  const [number, setNumber] = useState("");

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderBottomWidth: 1,
          padding: 10,
        }}
        onChangeText={setText}
        value={text}
      />
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setNumber}
        value={number}
        placeholder="placeholder não precisa ser numérico tbm"
        keyboardType="numeric"
      />
    </View>
  );
};
```

### Componentes de Interface do Usuário

#### **Switch**

Input específico para valores booleanos. Aparência semelhante ao componente eletrônico switch, para outras aparências e interação com múltiplos elementos (checkbox, radiobutton, etc) é necessário utilizar componentes da comunidade ou criar os próprios.

```jsx
import { useState } from "react";
import { View, Switch, Text } from "react-native";

export const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => setEnabled((previous) => !previous);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        margin: 20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>Mostrar segunda View:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={enabled}
        />
      </View>
      {enabled && (
        <View style={{ height: 100, width: 200, backgroundColor: "#345" }} />
      )}
    </View>
  );
};
```

#### **Button**

Botão simples com suporte a qualquer plataforma. Possui um nível mínimo de estilização para manter aparência nativa. Necessário receber as props onPress e title (funcionalidades autoexplicativas).

```jsx
import { Button, View } from "react-native";

export const ButtonExample = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      marginHorizontal: 16,
    }}
  >
    <Button
      title="Aperte-me"
      color="purple"
      onPress={() => alert("Mensagem.txt")}
    />
    <View
      style={{
        marginVertical: 8,
        borderBottomColor: "#777",
        borderBottomWidth: 0.5,
      }}
    />
    <Button
      title="Não consegue me apertar"
      disabled
      onPress={() => alert("Não consegue né Moisés")}
    />
  </View>
);
```

#### **Pressable**

Wrapper (tradução direta: embrulhador, tradução semântica: "envolvedor") para adicionar gerenciamento de eventos de toque na tela, através da API _Pressability_ do React Native. Muito comumente utilizado para criar botões com aparência mais customizável e/ou suporte a diferente eventos de toque:

- **onPressIn**: Acionado sempre o usuário tocar na área determinada.
- **onPressOut**: Acionado quando o usuário deixar de tocar na área determinada.
- **onPress**: Acionado após os eventos onPressIn e onPressOut forem detectados na área determinada. Basicamente, facilita o processo de detectar um click simples.
- **onLongPress**: Acionado após 500ms (valor alterável) do evento onPressIn sem a ativação do evento onPressOut. Ou seja, facilita o processo de detectar um click longo. Obs: o evento onPressOut ainda é ativado quando o usuário solta o botão.

Para mais detalhes, consulte a [Documentação](https://reactnative.dev/docs/pressable).

O componente também fornece a possibilidade de extender a área de detecção do toque, através da prop hitRect, com menos prioridade do que eventos de componentes vizinhos. Útil para extender a área de um botão pequeno, por exemplo.

```jsx
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const PressableExample = () => {
  const [timesPressed, setTimesPressed] = useState(0);
  const [buttonText, setButtonText] = useState("Me Aperta");
  const [buttonColor, setButtonColor] = useState("#def");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
      }}
    >
      <View
        style={{
          padding: 20,
          width: 200,
          borderWidth: 0.5,
          borderColor: "#f0f0f0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text>{timesPressed ? timesPressed + "x onPress" : ""}</Text>
      </View>

      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#8ac" : "#ace",
          borderRadius: 8,
          padding: 6,
          margin: 10,
          width: 200,
        })}
      >
        {({ pressed }) => (
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>

      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={{
          backgroundColor: buttonColor,
          borderRadius: 8,
          padding: 6,
          margin: 10,
          width: 200,
        }}
        onPressIn={() => {
          setButtonText("Apertado");
          setButtonColor("#8ac");
        }}
        onPressOut={() => {
          setButtonText("Me Aperta");
          setButtonColor("#ace");
        }}
        onLongPress={() => {
          setButtonText("Me Larga");
          setButtonColor("#c88");
        }}
        hitSlop={20}
      >
        <Text style={{ fontSize: 16, textAlign: "center" }}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};
```

#### **Touchable**

Na verdade é uma "família" de componentes Wrapper, que recebem exatamente uma child e adicionam eventos de toque nela, além de algumas funcionalidades secundárias. No entanto, segundo a documentação do React Native, não é garantido que terão suporte no futuro, então prefira utilizar Pressable e fazer manualmente os efeitos secundários, que não são lá muito difíceis de implementar.

- **TouchableOpacity**: Ao pressionar, diminui a opacidade do elemento fornecido.

```jsx
export const TouchableOpacityExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderWidth: 0.5,
          borderColor: "#f0f0f0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text>{count ? count + "x Aperado" : ""}</Text>
      </View>

      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setCount(count + 1)} activeOpacity={0.7}>
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableOpacity>

      <View style={{ backgroundColor: "lightblue" }}>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <View style={[styles.button, { margin: 5 }]}>
            <Text>Aperte</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
```

- **TouchableHighlight**: Ao pressionar, diminui a opacidade do elemento fornecido, porém possui um background mais claro, fazendo com que a View fique mais clara.

```jsx
export const TouchableHighlightExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderWidth: 0.5,
          borderColor: "#f0f0f0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text>{count ? count + "x Aperado" : ""}</Text>
      </View>

      <TouchableHighlight
        onPress={() => setCount(count + 1)}
        underlayColor="#fff"
      >
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => setCount(count + 1)}
        underlayColor="#000"
      >
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => setCount(count + 1)}>
        <View style={[styles.button, { margin: 5 }]}>
          <Text>Aperte</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
```

- **TouchableNativeFeedback**: No momento, exclusivo para Android. Fornece a resposta nativa ao apertar um botão e segue todos demais aspectos comentados do Touchable.

```jsx
export const TouchableNativeFeedbackExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderWidth: 0.5,
          borderColor: "#f0f0f0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text>{count ? count + "x Aperado" : ""}</Text>
      </View>

      <TouchableNativeFeedback onPress={() => setCount(count + 1)}>
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
```

- **TouchableWithoutFeedback**: Não recomendado por não fornecer uma resposta ao toque para o usuário. Utilize apenas em casos específicos.

```jsx
export const TouchableWithoutFeedbackExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderWidth: 0.5,
          borderColor: "#f0f0f0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text>{count ? count + "x Aperado" : ""}</Text>
      </View>

      <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#AAA",
    padding: 10,
    width: 200,
  },
});
```

### Componentes de Lista (List Views)

Versões mais completas e específicas da ScrollView. Além de permitir a rolagem de elementos, apenas carrega os que estão na tela, permitindo uma performance mais otimizada com muitos elementos, e adicionam algumas outras funcionalidades. Os dados dos elementos devem ser passados por prop em forma de vetor (data), assim como o componente que recebe a informação (renderItem). Boa alternativa para a utilização de maps.

#### **FlatList**

Mais comumente utilizado, possui:

- Suporte multiplatforma completo;
- Suporte a multiplas colunas;
- Suporte a Header (Cabeçalho);
- Suporte a Footer (Rodapé);
- Suporte a separadores;
- Suporte a ScrollToIndex (rolagem ao índice);
- Modo horizontal opcional;
- Puxar para recarregar;
- Callbacks configuráveis de visualização.

```jsx
import { View, FlatList, Text } from "react-native";
import { Item } from "./Item";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export const FlatListExample = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
```

#### **SectionList**

Basicamente uma FlatList com suporte à seções e renderização heterogênea de dados. Utilize somente se essas características adicionais forem necessárias.

```jsx
import { Text, View, SectionList } from "react-native";
import { Item } from "./Item";

type Data = {
  title: string,
  data: string[],
};

const DATA: Data[] = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

type SectionHeaderProps = {
  section: Data,
};

const SectionHeader = ({ section }: SectionHeaderProps) => (
  <Text style={{ fontSize: 32, backgroundColor: "#fff" }}>{section.title}</Text>
);

export const SectionListExample = () => (
  <View
    style={{
      flex: 1,
      marginHorizontal: 16,
    }}
  >
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section }) => <SectionHeader section={section} />}
    />
  </View>
);
```

### Outros Componentes

#### **ActivityIndicator**

Ícone muito comumente utilizado para indicar que algo está carregando.

```jsx
import { ActivityIndicator, View } from "react-native";

export const ActivityIndicatorExample = () => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    }}
  >
    <ActivityIndicator />
    <ActivityIndicator size="small" color="#292963" />
    <ActivityIndicator size="large" color="#4cbd4c" />
  </View>
);
```

#### **Alert**

Dispara um diálogo de alerta com título e mensagem, semelhante ao alert do JavaScript, porém um pouco mais flexível. Possui suporte para iOS e Android, para funcionalidades específicas, consulte a documentação. Pode ser passada uma lista de botões, que, ao clicados, realizam seus respectivos callbacks e fecham o diálogo. Por padrão, possui um botão "OK", que somente fecha a mensagem.

```jsx
import { View, Button, Alert } from "react-native";

const defaultAlert = () => Alert.alert("Título", "Mensagem de alerta");

const customAlert = () =>
  Alert.alert("Título", "Mensagem que necessita tomada de ação", [
    {
      text: "Mais tarde",
      onPress: () => console.log("Resposta neutra"),
    },
    {
      text: "Cancelar",
      onPress: () => console.log("Resposta negativa"),
    },
    {
      text: "OK",
      onPress: () => console.log("Resposta positiva"),
    },
  ]);

export const AlertExample = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 50,
      }}
    >
      <Button title={"Alert Padrão"} onPress={defaultAlert} />
      <Button title={"Alert Customizado"} onPress={customAlert} />
    </View>
  );
};
```

#### **Modal**

Modal é um nome comumente utilizado no desenvolvimento web e principalmente mobile e indica um elemento que aparece por cima da tela, sem que ela deixe de ser carregada, semelhante ao alert. Entretanto, possui muito mais flexibilidade, já que é possível renderizar quaisquer elementos desejados, inclusive criar um alert customizado.

```jsx
import { Dispatch, SetStateAction, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

type ModalContentProps = {
  setModalVisible: Dispatch<SetStateAction<boolean>>,
};

const ModalContent = ({ setModalVisible }: ModalContentProps) => {
  return (
    <View style={styles.centeredView}>
      {/* ^ Centraliza o Modal na tela */}
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
        <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
          <Text style={styles.textStyle}>Fechar Modal</Text>
        </Pressable>
      </View>
    </View>
  );
};

export const ModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal foi fechado pelo botão voltar");
          setModalVisible(false);
        }}
      >
        {/* Conteúdo do modal: */}
        <ModalContent setModalVisible={setModalVisible} />
      </Modal>
      {/* Conteúdo da página: */}
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    height: 300,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
```

#### **StatusBar**

Fornece controle da StatusBar do celular, com suporte a iOS e Android. É a área no topo, próximo à câmera frontal, que mostra notificações, conexão wi-fi, bateria, recursos, etc. Via de regra é sempre bom colocar pelo menos algum elemento, nem que seja somente para dar o padding necessário para que as telas não se baguncem com as informações do celular.

```jsx
import { useState } from "react";
import { Button, StatusBar, Text, View, StatusBarStyle } from "react-native";

const STYLES = ["default", "dark-content", "light-content"] as const;

export const StatusBarExample = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0]
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = (STYLES.indexOf(statusBarStyle) + 1) % 3;
    setStatusBarStyle(STYLES[styleId]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <StatusBar
        animated={false}
        backgroundColor="#def"
        barStyle={statusBarStyle}
        hidden={hidden}
      />
      <Text style={{ textAlign: "center" }}>
        StatusBar: {hidden ? "Inativa" : "Ativa"}
      </Text>
      <Text style={{ textAlign: "center" }}>
        StatusBar Style: {statusBarStyle}
      </Text>
      <View style={{ padding: 10, rowGap: 10 }}>
        <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
        <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
      </View>
    </View>
  );
};

```

#### **Comunidade**

Por padrão, o React Native não possui tantos componentes (existem outros fora os apresentados) e já delegou alguns. Isso se deve por conta da vasta comunidade de apoio, já mencionada diversas vezes ao longo da capacitação. Portanto, caso seja necessário algum componente específico que deveria estar disponível, muito possivelmente tem uma solução da comunidade ou do próprio Expo para isso.

## Estilização

Como mencionado anteriormente, a estilização dos componentes em React Native é um pouco diferente do React padrão. Isso ocorre principalmente, porque o React Native não possui uma integração tão direta com o CSS, não sendo possível simplesmente criar um arquivo .css e utilizá-lo como na web.

### StyleSheet

A primeira alternativa para a estilização, é utilizar a solução nativa padrão: StyleSheets. Similar ao exemplo dado na seção de React, consiste em criar um objeto de objetos com chaves muito semelhantes ao css e passá-lo através da prop style.

```jsx
import { StyleSheet } from "react-native";

export const StyledComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, World!</Text>
  </View>
);

// note que os estilos podem ser definidos após o componente (prática padrão)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
```

A vantagem de utilizar o método create do StyleSheet, é que ele fornece as dicas das propriedades, facilitando a consulta e a correção e possíveis erros. Obs: diferentemente do css, declarar uma chave com nome idêntico ao componente (View: {...}, Text: {...}, etc) não aplica automaticamente o estilo e ainda pode deixar a nomenclatura um pouco confusa. Por exemplo, um componente possui duas views aninhadas, caso a chave na estilização tenha o nome "view", ela se refere a apenas uma delas ou as duas? Para evitar possíveis ambiguidades é recomendado dar nomes semânticos para cada elemento como "container", "card", etc. O problema disso é ter que parar 5 min para pensar qual o melhor nome para a estilização.

### Styled Components

Juntamente com o próprio StyleSheet, styled-components é uma das alternativas mais populares para estlização dos components no React Native, ele permite o uso do CSS praticamente idêntico através de strings. Para utilizá-lo, basta instalar a biblioteca:

```bash
npm install styled-components
```

O uso padrão da biblioteca é criar um arquivo styles.ts junto do componente que deseja estilizar:

```js
// styles.ts
import styled from "styled-components/native";

// styled possui acesso a todos componentes básicos do React Native
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const CustomText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;
```

```jsx
import { Container, CustomText } from "./styles";

export const StyledComponent = () => (
  <Container>
    <CustomText>Hello, World!</CustomText>
  </Container>
);
```

Suas principais desvantagens são a criação de nomes para as versões estilizadas dos componentes e o desacoplamento de estilo e estrutura (controverso é algo bom ou ruim). Porém, apesar de um pouco trabalhoso, é possível estilizar componentes de terceiros, além de outras ferramentas mais avançadas como estilização condicional (muito comum), passagem de props através da estilização e criação de temas robustos e escaláveis.

### Nativewind

Em poucas palavras, é uma biblioteca Tailwind CSS no React Native. Contudo, infelizmente para os amantes de Tailwind, não é tão simples de utilizar quanto na web. É necessário fazer diversas configurações em arquivos diferentes, que ainda variam de acordo com a versão do SDK do projeto, às vezes sendo mais trabalhoso do que prático utilizá-lo com relação às outras opções.

Obs: No momento da criação desse documento não consegui configurar o tailwind ainda, confirmando o que foi afirmado. Dessa forma, os exemplos abaixo não funcionam.

```jsx
// o import deve ser feito a partir do nativewind
import { View, Text } from "nativewind";

export function App() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-white text-lg">Hello, World!</Text>
    </View>
  );
}
```

```jsx
import { View, Text } from "react-native";
import { styled } from "nativewind";

// alternativa possui o mesmo problema da StyleSheet e fere um dos princípios do tailwind
const StyledView = styled(
  View,
  "flex-1 justify-center items-center bg-blue-500"
);
const StyledText = styled(Text, "text-white text-lg");

export function App() {
  return (
    <StyledView>
      <StyledText>Hello, World!</StyledText>
    </StyledView>
  );
}
```

## Roteamento e Multiplas Telas

Uma coisa que foi não abordada na capacitação de React é o gerenciamento de rotas, ou seja, o controle de múltiplas telas. Apesar do React possui um sistema de roteamento, ele não é tão robusto quanto o do NextJS (framework utilizado para web), dessa maneira, não é tão essencial. Porém, para desenvolvimento mobile, um sistema robusto de roteamento é essencial, pois raramente um aplicativo terá somente uma tela, então quase sempre acabará sendo necessário uma implementação. Por causa disso, o Expo possui o próprio sistema de roteamento, parecido com o NextJS.

Nas últimas versões do Expo, foi aderida a arquitetura de utilizar uma pasta `app`, em que qualquer subpasta (ou componente) declarado dentro será convertido em uma nova tela. Além disso, é possível criar um arquivo `_layout.tsx` para um controle mais preciso das propriedades da tela.

O arquivo `index.tsx` dentro de `app` é a primeira tela carregada ao abrir o aplicativo. Nele não é necessária nenhuma configuração específica de rota, apenas exportar o componente com default (assim como qualquer outra página ou layout):

```jsx
import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Home() {
  const router = useRouter(); // hook do expo para mudar de tela programaticamente
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Ir para configurações"
        onPress={() => router.push("/settings")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
```

O mesmo se aplica para outras rotas que deseja criar na aplicação, por exemplo:

```jsx
import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Settings = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Configurações</Text>
      <Button title="Voltar para Home" onPress={() => router.push("/")} />
    </View>
  );
};

export default Settings;
```

Nesse exemplo, a estilização foi separada somente para demonstrar a possibilidade:

```ts
// settings/styles.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
```

A definição das telas é feita dentro de `_layout.tsx`:

```jsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function TabsNavigation() {
  return (
    {/* Wrapper para conter todas as telas */}
    <Tabs screenOptions={{ headerShown: true }}>
      {/*  Declaração da tela*/}
      <Tabs.Screen
        name="index" // nome do arquivo (Home)
        options={{
          title: "Home", // título da tela, mostrado na parte inferior
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              color={focused ? "#00f" : "#666"}
              size={size}
            />
          ), // ícone da tela, mostrado na parte inferior
        }}
      />
      <Tabs.Screen
        name="settings/index" // para utilizar uma pasta é preciso especificar o arquivo exato
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabsNavigation;
```

Simples assim, a configuração das telas está feita. No exemplo apresentado, foram utilizadas Tabs (Abas) para que o usuário clique e altere as páginas, porém o Expo Router possui outras possibilidades de navegação como Stack (Pilha: sistema utilizado em navegadores web) e Drawer (Gaveta: um menu contendo as possíveis páginas).

Para utilizar a navegação Stack, basta basicamente trocar os lugares que estão escrito "Tabs" por "Stack". No entanto, tenha atenção para a prop options, que varia com cada navegação. Nessa caso, a Stack não possui "tabBarIcon", por exemplo.

```jsx
// _layout.tsx
import { Stack } from "expo-router";

function StackNavigation() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      {/* Declaração da tela*/}
      <Stack.Screen
        name="index" // nome do arquivo (Home)
        options={{
          title: "Home", // título da tela, mostrado na parte superior
        }}
      />
      <Stack.Screen
        name="settings/index" // para utilizar uma pasta é preciso especificar o arquivo exato
        options={{
          title: "Configurações",
        }}
      />
    </Stack>
  );
}

export default StackNavigation;
```

Para utilizar a navegação Drawer, diferentemente dos outros casos, é preciso instalar as dependências. No momento da capacitação o comando é:

```bash
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

OBS: Como o próprio nome sugere, a biblioteca _gesture handler_ gerencia e detecta gestos do usuário, como, por exemplo, arrastar o dedo na parte lateral do celular para abrir a gaveta de rotas.

```jsx
// _layout.tsx
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

function DrawerNavigation() {
  return (
    {/* Necessário utilizar o gesture handler para "puxar" a gaveta do lado */}
    <GestureHandlerRootView>
      <Drawer screenOptions={{ headerShown: true }}>
        {/* Declaração da tela*/}
        <Drawer.Screen
          name="index" // nome do arquivo (Home)
          options={{
            title: "Home", // título da tela, mostrado na parte inferior
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="home-outline"
                color={focused ? "#00f" : "#666"}
                size={size}
              />
            ), // ícone da tela, mostrado na parte inferior
          }}
        />
        <Drawer.Screen
          name="settings/index" // para utilizar uma pasta é preciso especificar o arquivo exato
          options={{
            title: "Configurações",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default DrawerNavigation;

```

Por fim, também é possível aninhar os sistemas de navegação. Dessa forma é possível que, por exemplo, o aplicativo tenha uma navegação geral por tabs, mas uma tela específica possua subtelas gerenciada por um drawer. Para isso, é preciso que a rota que deseja possuir subrotas também tenha um arquivo `_layout.tsx` com as devidas configurações, além, é claro, das subrotas propriamente ditas.

```jsx
// app/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function TabsNavigation() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              color={focused ? "#00f" : "#666"}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings" // única alteração: com subrotas utiliza-se apenas o nome da pasta
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabsNavigation;
```

```jsx
// app/settings/_layout.tsx funciona normalmente
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

function DrawerNavigation() {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="index"
          options={{
            title: "Configurações de áudio",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="megaphone-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="preferences"
          options={{
            title: "Preferências",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default DrawerNavigation;
```

```jsx
// app/settings/index.tsx idêntico
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

const Settings = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Configurações de áudio</Text>
      <Button title="Voltar para Home" onPress={() => router.push("/")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Settings;
```

```jsx
// app/settings/preferences
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

const Preferences = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Preferências</Text>
      <Button
        title="Ir para Configurações de áudio"
        onPress={() => router.push("/settings")} // usar rota a partir da raiz
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Preferences;
```

OBS: Lembre-se sempre de usar export default para layouts e páginas!

## Persistência de Dados Async Storage

É muito comum que aplicativos guardem algumas pequenas informações no próprio dispositivo do usuário, por exemplo, qual conta está logada no momento. Isso é muito bom para evitar que toda vez que queira utilizar o aplicativo seja necessário inserir uma mesma informação novamente.

No React Native, podemos utilizar essa funcionalidade através do AsyncStorage. Ela é uma API antigamente fornecida pelo próprio React Native (agora mantida pela comunidade) feita justamente para armazenar dados localmente no dispositivo do usuário, de maneira assíncrona. Além do login do usuário, também podem ser salvos alguns estados simples ou configurações e preferências do usuário.

Como não é mais fornecida na base do React Native, é preciso instalar o pacote, através do comando:

```bash
npm install @react-native-async-storage/async-storage
```

Para trabalhar com o AsyncStorage, basta importá-lo e utilizar suas funções dentro de um bloco try-catch. A interface da API para guardar e retornar as informações é bem simples: cada informação deve ter uma chave e um valor, assim como uma variável em linguagens de programação ou um objeto JS. É possível salvar informações em chaves diferentes dentro da mesma aplicação. A única limitação é que o valor deve ser sempre uma string, no entanto isso é muito facilmente contornável.

É uma boa prática que o nome da chave comece com o nome do aplicativo, seguido de um nome significativo para o valor, por exemplo: `@app-ex-machina:gesto` ou `@app-ex-machina:preferencias`. Isso é feito para garantir que não ocorra colisões entre informações salvas por diferentes aplicativos, dependendo do gerenciamento do sistema alvo.

```jsx
import AsyncStorage from "@react-native-async-storage/async-storage";

// salvar informação
const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error("Erro ao salvar os dados", e);
  }
};

// recuperar informação salva
const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(value);
      return value;
    }
  } catch (e) {
    console.error("Erro ao recuperar os dados", e);
  }
};
```

Com essas duas funções básicas, é possível adicionar diversas funcionalidades na aplicação, no entanto existem mais duas funções importantes para quando não é mais necessário armazenar algum valor:

```jsx
// remover uma informação que não é mais necessária
const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error("Erro ao remover os dados", e);
  }
};

// limpar todos os dados armazenados:
const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error("Erro ao limpar o armazenamento", e);
  }
};
```

Para trabalhar com informações que não sejam strings, basta convertê-las para strings :D, com template strings ou a função própria do JS. Isso parece bem direto para booleans, numbers e outros dados primitivos. Felizmente, dados mais complexos, como objetos e arrays também podem passar pelo mesmo processo. Para isso, utiliza-se a Anotação de Objetos JavaScript, que é tão importante que até ganhou um nome e extensão de arquivo próprio, o famoso JSON (JavaScript Object Notation). Ele é a maneira mais comum de transferir informações entre backend e frontend a partir de uma API, justamente por ser fácil de converter para strings, realizar a transferência e retornar para o JavaScript como objeto, pronto para ser usado.

O utilitário do JSON é tão comum em JS que não é necessário nem importá-lo basta utilizar suas duas funções principais: stringfy (transformar objeto em string) e parse (transformar string em objeto).

```jsx
// Por padrão, ao salvar dados no AsyncStorage, utiliza-se esse método desde o começo,
// para garantir maior flexibilidade e escalabilidade das informações a serem armazenadas.

const storeObject = async (key: string, value: Object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // salvar o erro
    console.error("Erro ao salvar o objeto", e);
  }
};

const getObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // capturar o erro
    console.error("Erro ao recuperar o objeto", e);
  }
};
```

O AsyncStorage é adequado para armazenar pequenos volumes de dados e não deve ser utilizado para substituir o Banco de Dados nem armazenamentos em nuvem, mesmo porque cada dispositivo terá seus dados próprios. Também é interessante evitar armazenar dados sensíveis sem criptografia, pois o AsyncStorage não oferece essa funcionalidade nativamente.

Por fim, uma prática muito comum para evitar essa mesma dependência e blocos try-catch em diferentes partes do código, é criar um hook customizado useStorage ou useAsyncStorage.

## Permissões

O último aspecto importante para abordar com relação ao desenvolvimento proprimente dito de um aplicativo em React Native são as permissões.

Alguns recursos de hardware ou software do celular precisam ser autorizados para que o aplicativo tenha acesso. Isso é muito bom para ajudar a manter o dispositivo seguro, pois se, por exemplo, seu aplicativo de anotações solicita acesso à câmera (mesmo ele não tendo a funcionalidade de guardar fotos nas anotações), é um tanto quanto suspeito. Entretanto, isso também dificulta um pouquinho a vida dos desenvolvedores, que agora precisam realizar a solicitação antes de utilizar o recurso.

Essa operação parece bem direta ao ponto e no exemplo escolhido de fato será, contudo nem sempre é tão fácil por conta da maneira que diferentes sistemas gerenciam as permissões. A utilização do BLE (Bluetooth Low Energy), por exemplo, necessita permissões diferentes no Android e no iOS, fazendo com que o código precise identificar qual é o sistema (essa é a parte fácil) e realizar as permissões respectivas.

No exemplo abaixo, será tratado como utilizar a câmera do celular. Para isso, inicie instalando o pacote:

```bash
npx expo install expo-camera
```

```jsx
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

export function CameraExample() {
  const [showCamera, setShowCamera] = useState(true);
  const [facing, setFacing] = useState < CameraType > "back";
  // Nesse caso, o Expo faz o gerenciamento das permissões através de um Hook (prática muito comum)
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // carregando as permissões da câmera
    return <View />;
  }

  if (!permission.granted) {
    // Permissões não foram concedidas
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          É necessário que você permita a utilização da câmera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function toggleShowCamera() {
    setShowCamera((current) => !current);
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <CameraView style={styles.camera} facing={facing}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Text style={styles.text}>Alternar câmera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={toggleShowCamera}>
              <Text style={styles.text}>Esconder câmera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={styles.center}>
          <TouchableOpacity style={styles.button} onPress={toggleShowCamera}>
            <Text style={[styles.text, { color: "black" }]}>
              Mostrar câmera
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "flex-end",
    margin: 64,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
```

## Deploy

Assim como outros diversos aspectos do desenvolvimento mobile, realizar o deploy dos aplicativos para iOS e Android utilizando o Expo é um processo mais simplificado.

### Configurações

Antes de realizar o Build e o Deploy do aplicativo, pode ser interessante configurar o arquivo `app.json`. Onde é possível definir várias propriedades do seu aplicativo, como o nome, ícone, splash screen e permissões.

Depois disso, é necessário fazer todas as configurações do **eas cli** recomendadas na [Documentação do Expo](https://docs.expo.dev/build/setup/). No momento da capacitação, elas se consistem em:

1. Criar uma conta no EAS (Expo Application Services): https://expo.dev/eas

2. Instalar o cliente EAS globalmente na sua máquina:

```bash
npm install -g eas-cli
```

3. Logar na conta criada:

```bash
eas login
```

Caso queira, certifique-se que está logado usando o comando `eas whoami` antes de prosseguir.

4. Iniciar o ambiente de configuração:

```bash
eas build:configure
```

Esse comando criará um documento `eas.json` com as configurações sobre o build da aplicação. Como é um ambiente bem sensível, é preciso ter um pouco de paciência para tentar entender melhor como funciona na hora de fazer o deploy do aplicativo. É comum ter alguns problemas com isso de tempos em tempos. Para os meus aplicativos, o build para android deu certo com as seguintes configurações:

```json
"build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "developmentClient": false,
      "android": {
        "buildType": "apk"
      }
    }
  },
```

Desse modo, ao realizar o build do aplicativo no ambiente de produção android, será gerado o apk que pode ser distribuído internamente. Para publicar o aplicativo nas lojas oficiais do Android ou Apple é preciso mais algumas burocracias: uma conta de desenvolvedor Google Play ou Apple, respectivamente, o que infelizmente pode ser pago. Portanto, até o momento seguimos com a primeira opção, para isso, rode o comando:

### Build

```bash
eas build -p android --profile production
```

Agora é a hora de parar para tomar um cafézinho, porque o processo de build é um pouco demorado. Quando terminar o processo, irá aparecer um link, onde é possível baixar o arquivo do aplicativo.

Agora acontecerá uma combinação de 4 possibilidades:

#### **1 - O arquivo já está no formato APK**

É um dos melhores cenários, pois basta transferir o arquivo para o celular (pelo Whatsapp mesmo é possível) ou abrir o link diretamente pelo celular e baixar. Em ambos os casos, devem aparecer algumas mensagens sobre a segurança do arquivo, pois é um apk de terceiros então não passa por todas as verificações das lojas oficiais de aplicativos. Mas no geral, a gente confia no aplicativo desenvolvido por nós mesmos. Depois é só clicar no arquivo pelo celular que ele vai inicializar a instalação, após mais algumas mensagens de segurança. Dependendo do quanto o seu celular é chato com isso, pode dar um pouco de dor de cabeça essa instalação.

#### **2 - O arquivo está no formato tar.gz**

Ainda não fiz deploys suficientes para ter certeza do que causa o arquivo vir nesse formato. Porém já aconteceu, então vale a pena abordar o caso. Até o momento acredito que possa ser um padrão antigo mesmo ou quando a aplicação precisa do _prebuild_ comentado anteriormente.

Essa extensão se refere a um arquivo compactado e existem dois modos para instalar o arquivo gerado no build:

O primeiro deles é simplesmente baixar o arquivo no celular, abrí-lo com algum aplicativo de compactação (o próprio winrar, por exemplo), e instalar o apk localizado na pasta release.

A segunda maneira é baixar o arquivo pelo computador, abrir o terminal de comando (cmd, powershell, etc), e executar o comando: `tar -xf <diretorio/nomeDoArquivo>.tar.gz`. Isso fará com que o arquivo seja extraído na pasta em que ele se encontra. Depois disso basta transferir o arquivo `app-release.apk` na pasta `release` para o celular e instalar.

#### **3 - O aplicativo de desenvolvimento já está instalado**

Ao realizar o prebuild, o aplicativo precisa ser instalado no celular de fato, mesmo que somente a versão de desenvolvedor (que funciona apenas quando o ambiente está em execução no computador). No entanto, ao tentar instalar o aplicativo no ambiente de produção (que funciona de maneira autônoma), alguns sistemas dizem que o aplicativo já está instalado e não deixa proceder com o processo.

Desinstalar o aplicativo através do próprio celular nem sempre funciona, pois, como dito nas outras seções, podem ficar alguns resquícios, então é necessário remover todos os vestígios do celular. Para isso, no caso de aplicações android, é necessário utilizar o **adb** (Android Debug Bridge). Caso não esteja instalado no seu computador, utilize o comando `npm install -g adb`. Em seguida, conecte seu celular pelo USB e permita a transmissão de arquivos (certifique-se que o modo de desenvolvedor já está ativo).

Para desinstalar de fato o aplicativo utilize o comando `adb uninstall <package name>` pelo terminal. No geral o package name segue o padrão: `com.<usuario>.<aplicativo>`, porém é solicitado que o programador confirme o nome no momento do build e é possível verificá=lo no arquivo `app.json`, na chave "package".

OBS: Se, por ventura, o desenvolvedor desinstalar o aplicativo sem querer e não conseguir instalar a versão de desenvolvimento do app novamente, também é possível utilizar esse comando para limpar os vestígios do app no celular que impedem a instalação. Dessa maneira será possível instalar o aplicativo novamente com o comando `npx expo run:android`.

#### **4 - Outros problemas**

Outras coisas que podem impedir que o apk seja instalado são o Google Play Protect e o sistema de segurança do celular. Como ambos sistemas não reconhecem a fonte do apk, eles podem detectá-lo como algo malicioso, impedindo sua instalação. Uma dica para contornar esse problema, é desativar esses sistemas temporareamente e tentar novamente.

## Get started

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
