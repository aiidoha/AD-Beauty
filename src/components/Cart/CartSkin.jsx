import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useCart } from "../../contexts/CartContextProvider";

import { useNavigate } from "react-router-dom";
import NavbarSkin from "../Navbar/NavbarSkin";
import FooterSkin from "../Footer/FooterSkin";

export default function CartSkin() {
  const navigate = useNavigate();
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();
  console.log(cart);
  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <>
      <div className="divider"></div>
      <NavbarSkin />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">SubPrice</TableCell>
              <TableCell align="right">-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map((row) => (
              <TableRow
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.item.image} width="70" height="70" alt="" />
                </TableCell>
                <TableCell align="right">{row.item.title}</TableCell>
                <TableCell align="right">{row.item.type}</TableCell>
                <TableCell align="right">{row.item.description}</TableCell>
                <TableCell align="right">{row.item.price}</TableCell>
                <TableCell align="right">
                  <input
                    type="number"
                    onChange={(e) =>
                      changeProductCount(e.target.value, row.item.id)
                    }
                    value={row.count}
                    min={1}
                  />
                </TableCell>
                <TableCell align="right">{row.subPrice}</TableCell>
                <TableCell align="right">
                  <button onClick={() => deleteCartProduct(row.item.id)}>
                    DELETE
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={() => navigate("/buy")}>
          BUY NOW FOR {cart?.totalPrice} $
        </Button>
      </TableContainer>
      <FooterSkin />
    </>
  );
}
