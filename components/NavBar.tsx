import React, { useState } from 'react';
import { Linking, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';

const navBarItems = ['Showcase', 'Docs', 'Blog', 'Analytics', 'Templates', 'Enterprise']
export default function Navbar() {
  const [open, setOpen] = useState(true);
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.leftContent}>
        <TouchableOpacity onPress={() => Linking.openURL('/')}>
          <Text style={styles.title}>AEON</Text>
        </TouchableOpacity>
        {
            isDesktop && (
                <View style={styles.menuDesktop}>
                    {navBarItems.map(item => (
                    Platform.OS === 'web' ? (
                        <a key={item} href={'/'} style={styles.aTagDesktop}>
                            <Text style={styles.menuItem}>{item}</Text>
                        </a>
                        ) : (
                        <Text key={item} style={styles.menuItemDesktop}>
                            {item}
                        </Text>
                        )
                    ))}
                </View>  
            )
        }
        </View>
        <View style={{ ...styles.rightContent, maxWidth: isDesktop ? 350 : 250 }}>
            <TextInput placeholder="Search..." style={styles.search} />
            {!isDesktop && (
                <TouchableOpacity onPress={() => setOpen(!open)}>
                <Text style={styles.toggle}>{open ? '✖' : '☰'}</Text>
                </TouchableOpacity>
            )
            }
        </View>
      </View>

      {!isDesktop && open && (
        <View style={styles.menu}>
          {navBarItems.map(item => (
             Platform.OS === 'web' ? (
                <a key={item} href={'/'} style={styles.aTag}>
                  <Text style={styles.menuItem}>{item}</Text>
                </a>
              ) : (
                <Text key={item} style={styles.menuItem}>
                  {item}
                </Text>
              )
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#ffffff' },
  navbar: { flexDirection: 'row', alignItems: 'center', padding: 16, justifyContent: 'space-between' },
  title: { fontWeight: 'bold', color: 'blue', padding: 6 },
  search: { borderWidth: 1, padding: 8, flex: 1, marginHorizontal: 10, width: 300, backgroundColor: '#f2f2f2', borderColor: 'transparent' },
  toggle: { fontSize: 20 },
  menu: { padding: 16, backgroundColor: '#f2f2f2' },
  menuDesktop: { flexDirection: 'row' },
  menuItem: { paddingVertical: 6 },
  menuItemDesktop: { padding: 6 },
  aTag: { textDecorationLine: 'none' },
  aTagDesktop: { textDecorationLine: 'none', padding: 6 },
  leftContent: { flexDirection: 'row', alignItems: 'center' },
  rightContent: {  flexDirection: 'row', alignItems: 'center' }
});